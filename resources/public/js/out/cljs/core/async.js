// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34189 = arguments.length;
switch (G__34189) {
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
if(typeof cljs.core.async.t_cljs$core$async34190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34190 = (function (f,blockable,meta34191){
this.f = f;
this.blockable = blockable;
this.meta34191 = meta34191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34192,meta34191__$1){
var self__ = this;
var _34192__$1 = this;
return (new cljs.core.async.t_cljs$core$async34190(self__.f,self__.blockable,meta34191__$1));
});

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34192){
var self__ = this;
var _34192__$1 = this;
return self__.meta34191;
});

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34191","meta34191",-208283211,null)], null);
});

cljs.core.async.t_cljs$core$async34190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34190";

cljs.core.async.t_cljs$core$async34190.cljs$lang$ctorPrWriter = (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async34190");
});

cljs.core.async.__GT_t_cljs$core$async34190 = (function cljs$core$async$__GT_t_cljs$core$async34190(f__$1,blockable__$1,meta34191){
return (new cljs.core.async.t_cljs$core$async34190(f__$1,blockable__$1,meta34191));
});

}

return (new cljs.core.async.t_cljs$core$async34190(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__34196 = arguments.length;
switch (G__34196) {
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
var G__34199 = arguments.length;
switch (G__34199) {
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
var G__34202 = arguments.length;
switch (G__34202) {
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
var val_34204 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34204);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34204,ret){
return (function (){
return fn1.call(null,val_34204);
});})(val_34204,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34206 = arguments.length;
switch (G__34206) {
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
var n__31167__auto___34208 = n;
var x_34209 = (0);
while(true){
if((x_34209 < n__31167__auto___34208)){
(a[x_34209] = (0));

var G__34210 = (x_34209 + (1));
x_34209 = G__34210;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34211 = (i + (1));
i = G__34211;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34212 = (function (flag,meta34213){
this.flag = flag;
this.meta34213 = meta34213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34214,meta34213__$1){
var self__ = this;
var _34214__$1 = this;
return (new cljs.core.async.t_cljs$core$async34212(self__.flag,meta34213__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34214){
var self__ = this;
var _34214__$1 = this;
return self__.meta34213;
});})(flag))
;

cljs.core.async.t_cljs$core$async34212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34212.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34213","meta34213",-937447695,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34212";

cljs.core.async.t_cljs$core$async34212.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async34212");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34212 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34212(flag__$1,meta34213){
return (new cljs.core.async.t_cljs$core$async34212(flag__$1,meta34213));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34212(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34215 = (function (flag,cb,meta34216){
this.flag = flag;
this.cb = cb;
this.meta34216 = meta34216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34217,meta34216__$1){
var self__ = this;
var _34217__$1 = this;
return (new cljs.core.async.t_cljs$core$async34215(self__.flag,self__.cb,meta34216__$1));
});

cljs.core.async.t_cljs$core$async34215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34217){
var self__ = this;
var _34217__$1 = this;
return self__.meta34216;
});

cljs.core.async.t_cljs$core$async34215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34216","meta34216",1258491831,null)], null);
});

cljs.core.async.t_cljs$core$async34215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34215";

cljs.core.async.t_cljs$core$async34215.cljs$lang$ctorPrWriter = (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async34215");
});

cljs.core.async.__GT_t_cljs$core$async34215 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34215(flag__$1,cb__$1,meta34216){
return (new cljs.core.async.t_cljs$core$async34215(flag__$1,cb__$1,meta34216));
});

}

return (new cljs.core.async.t_cljs$core$async34215(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__34218_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34218_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34219_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34219_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30122__auto__ = wport;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34220 = (i + (1));
i = G__34220;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30122__auto__ = ret;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30110__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30110__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30110__auto__;
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
var args__31408__auto__ = [];
var len__31401__auto___34226 = arguments.length;
var i__31402__auto___34227 = (0);
while(true){
if((i__31402__auto___34227 < len__31401__auto___34226)){
args__31408__auto__.push((arguments[i__31402__auto___34227]));

var G__34228 = (i__31402__auto___34227 + (1));
i__31402__auto___34227 = G__34228;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((1) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31409__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34223){
var map__34224 = p__34223;
var map__34224__$1 = ((((!((map__34224 == null)))?((((map__34224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34224):map__34224);
var opts = map__34224__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34221){
var G__34222 = cljs.core.first.call(null,seq34221);
var seq34221__$1 = cljs.core.next.call(null,seq34221);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34222,seq34221__$1);
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
var G__34230 = arguments.length;
switch (G__34230) {
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
var c__34129__auto___34276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___34276){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___34276){
return (function (state_34254){
var state_val_34255 = (state_34254[(1)]);
if((state_val_34255 === (7))){
var inst_34250 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
var statearr_34256_34277 = state_34254__$1;
(statearr_34256_34277[(2)] = inst_34250);

(statearr_34256_34277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (1))){
var state_34254__$1 = state_34254;
var statearr_34257_34278 = state_34254__$1;
(statearr_34257_34278[(2)] = null);

(statearr_34257_34278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (4))){
var inst_34233 = (state_34254[(7)]);
var inst_34233__$1 = (state_34254[(2)]);
var inst_34234 = (inst_34233__$1 == null);
var state_34254__$1 = (function (){var statearr_34258 = state_34254;
(statearr_34258[(7)] = inst_34233__$1);

return statearr_34258;
})();
if(cljs.core.truth_(inst_34234)){
var statearr_34259_34279 = state_34254__$1;
(statearr_34259_34279[(1)] = (5));

} else {
var statearr_34260_34280 = state_34254__$1;
(statearr_34260_34280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (13))){
var state_34254__$1 = state_34254;
var statearr_34261_34281 = state_34254__$1;
(statearr_34261_34281[(2)] = null);

(statearr_34261_34281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (6))){
var inst_34233 = (state_34254[(7)]);
var state_34254__$1 = state_34254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34254__$1,(11),to,inst_34233);
} else {
if((state_val_34255 === (3))){
var inst_34252 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34254__$1,inst_34252);
} else {
if((state_val_34255 === (12))){
var state_34254__$1 = state_34254;
var statearr_34262_34282 = state_34254__$1;
(statearr_34262_34282[(2)] = null);

(statearr_34262_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (2))){
var state_34254__$1 = state_34254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34254__$1,(4),from);
} else {
if((state_val_34255 === (11))){
var inst_34243 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
if(cljs.core.truth_(inst_34243)){
var statearr_34263_34283 = state_34254__$1;
(statearr_34263_34283[(1)] = (12));

} else {
var statearr_34264_34284 = state_34254__$1;
(statearr_34264_34284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (9))){
var state_34254__$1 = state_34254;
var statearr_34265_34285 = state_34254__$1;
(statearr_34265_34285[(2)] = null);

(statearr_34265_34285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (5))){
var state_34254__$1 = state_34254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34266_34286 = state_34254__$1;
(statearr_34266_34286[(1)] = (8));

} else {
var statearr_34267_34287 = state_34254__$1;
(statearr_34267_34287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (14))){
var inst_34248 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
var statearr_34268_34288 = state_34254__$1;
(statearr_34268_34288[(2)] = inst_34248);

(statearr_34268_34288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (10))){
var inst_34240 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
var statearr_34269_34289 = state_34254__$1;
(statearr_34269_34289[(2)] = inst_34240);

(statearr_34269_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (8))){
var inst_34237 = cljs.core.async.close_BANG_.call(null,to);
var state_34254__$1 = state_34254;
var statearr_34270_34290 = state_34254__$1;
(statearr_34270_34290[(2)] = inst_34237);

(statearr_34270_34290[(1)] = (10));


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
});})(c__34129__auto___34276))
;
return ((function (switch__34039__auto__,c__34129__auto___34276){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_34271 = [null,null,null,null,null,null,null,null];
(statearr_34271[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_34271[(1)] = (1));

return statearr_34271;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_34254){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34272){if((e34272 instanceof Object)){
var ex__34043__auto__ = e34272;
var statearr_34273_34291 = state_34254;
(statearr_34273_34291[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34292 = state_34254;
state_34254 = G__34292;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_34254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_34254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___34276))
})();
var state__34131__auto__ = (function (){var statearr_34274 = f__34130__auto__.call(null);
(statearr_34274[(6)] = c__34129__auto___34276);

return statearr_34274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___34276))
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
return (function (p__34293){
var vec__34294 = p__34293;
var v = cljs.core.nth.call(null,vec__34294,(0),null);
var p = cljs.core.nth.call(null,vec__34294,(1),null);
var job = vec__34294;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34129__auto___34465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___34465,res,vec__34294,v,p,job,jobs,results){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___34465,res,vec__34294,v,p,job,jobs,results){
return (function (state_34301){
var state_val_34302 = (state_34301[(1)]);
if((state_val_34302 === (1))){
var state_34301__$1 = state_34301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34301__$1,(2),res,v);
} else {
if((state_val_34302 === (2))){
var inst_34298 = (state_34301[(2)]);
var inst_34299 = cljs.core.async.close_BANG_.call(null,res);
var state_34301__$1 = (function (){var statearr_34303 = state_34301;
(statearr_34303[(7)] = inst_34298);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34301__$1,inst_34299);
} else {
return null;
}
}
});})(c__34129__auto___34465,res,vec__34294,v,p,job,jobs,results))
;
return ((function (switch__34039__auto__,c__34129__auto___34465,res,vec__34294,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0 = (function (){
var statearr_34304 = [null,null,null,null,null,null,null,null];
(statearr_34304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__);

(statearr_34304[(1)] = (1));

return statearr_34304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1 = (function (state_34301){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34305){if((e34305 instanceof Object)){
var ex__34043__auto__ = e34305;
var statearr_34306_34466 = state_34301;
(statearr_34306_34466[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34467 = state_34301;
state_34301 = G__34467;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = function(state_34301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1.call(this,state_34301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___34465,res,vec__34294,v,p,job,jobs,results))
})();
var state__34131__auto__ = (function (){var statearr_34307 = f__34130__auto__.call(null);
(statearr_34307[(6)] = c__34129__auto___34465);

return statearr_34307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___34465,res,vec__34294,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34308){
var vec__34309 = p__34308;
var v = cljs.core.nth.call(null,vec__34309,(0),null);
var p = cljs.core.nth.call(null,vec__34309,(1),null);
var job = vec__34309;
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
var n__31167__auto___34468 = n;
var __34469 = (0);
while(true){
if((__34469 < n__31167__auto___34468)){
var G__34312_34470 = type;
var G__34312_34471__$1 = (((G__34312_34470 instanceof cljs.core.Keyword))?G__34312_34470.fqn:null);
switch (G__34312_34471__$1) {
case "compute":
var c__34129__auto___34473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34469,c__34129__auto___34473,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (__34469,c__34129__auto___34473,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async){
return (function (state_34325){
var state_val_34326 = (state_34325[(1)]);
if((state_val_34326 === (1))){
var state_34325__$1 = state_34325;
var statearr_34327_34474 = state_34325__$1;
(statearr_34327_34474[(2)] = null);

(statearr_34327_34474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (2))){
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34325__$1,(4),jobs);
} else {
if((state_val_34326 === (3))){
var inst_34323 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34325__$1,inst_34323);
} else {
if((state_val_34326 === (4))){
var inst_34315 = (state_34325[(2)]);
var inst_34316 = process.call(null,inst_34315);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34316)){
var statearr_34328_34475 = state_34325__$1;
(statearr_34328_34475[(1)] = (5));

} else {
var statearr_34329_34476 = state_34325__$1;
(statearr_34329_34476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (5))){
var state_34325__$1 = state_34325;
var statearr_34330_34477 = state_34325__$1;
(statearr_34330_34477[(2)] = null);

(statearr_34330_34477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (6))){
var state_34325__$1 = state_34325;
var statearr_34331_34478 = state_34325__$1;
(statearr_34331_34478[(2)] = null);

(statearr_34331_34478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (7))){
var inst_34321 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34332_34479 = state_34325__$1;
(statearr_34332_34479[(2)] = inst_34321);

(statearr_34332_34479[(1)] = (3));


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
});})(__34469,c__34129__auto___34473,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async))
;
return ((function (__34469,switch__34039__auto__,c__34129__auto___34473,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0 = (function (){
var statearr_34333 = [null,null,null,null,null,null,null];
(statearr_34333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__);

(statearr_34333[(1)] = (1));

return statearr_34333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1 = (function (state_34325){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34334){if((e34334 instanceof Object)){
var ex__34043__auto__ = e34334;
var statearr_34335_34480 = state_34325;
(statearr_34335_34480[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34481 = state_34325;
state_34325 = G__34481;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = function(state_34325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1.call(this,state_34325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__;
})()
;})(__34469,switch__34039__auto__,c__34129__auto___34473,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async))
})();
var state__34131__auto__ = (function (){var statearr_34336 = f__34130__auto__.call(null);
(statearr_34336[(6)] = c__34129__auto___34473);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(__34469,c__34129__auto___34473,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async))
);


break;
case "async":
var c__34129__auto___34482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34469,c__34129__auto___34482,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (__34469,c__34129__auto___34482,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async){
return (function (state_34349){
var state_val_34350 = (state_34349[(1)]);
if((state_val_34350 === (1))){
var state_34349__$1 = state_34349;
var statearr_34351_34483 = state_34349__$1;
(statearr_34351_34483[(2)] = null);

(statearr_34351_34483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (2))){
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34349__$1,(4),jobs);
} else {
if((state_val_34350 === (3))){
var inst_34347 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34349__$1,inst_34347);
} else {
if((state_val_34350 === (4))){
var inst_34339 = (state_34349[(2)]);
var inst_34340 = async.call(null,inst_34339);
var state_34349__$1 = state_34349;
if(cljs.core.truth_(inst_34340)){
var statearr_34352_34484 = state_34349__$1;
(statearr_34352_34484[(1)] = (5));

} else {
var statearr_34353_34485 = state_34349__$1;
(statearr_34353_34485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (5))){
var state_34349__$1 = state_34349;
var statearr_34354_34486 = state_34349__$1;
(statearr_34354_34486[(2)] = null);

(statearr_34354_34486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (6))){
var state_34349__$1 = state_34349;
var statearr_34355_34487 = state_34349__$1;
(statearr_34355_34487[(2)] = null);

(statearr_34355_34487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (7))){
var inst_34345 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34356_34488 = state_34349__$1;
(statearr_34356_34488[(2)] = inst_34345);

(statearr_34356_34488[(1)] = (3));


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
});})(__34469,c__34129__auto___34482,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async))
;
return ((function (__34469,switch__34039__auto__,c__34129__auto___34482,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0 = (function (){
var statearr_34357 = [null,null,null,null,null,null,null];
(statearr_34357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__);

(statearr_34357[(1)] = (1));

return statearr_34357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1 = (function (state_34349){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34358){if((e34358 instanceof Object)){
var ex__34043__auto__ = e34358;
var statearr_34359_34489 = state_34349;
(statearr_34359_34489[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34490 = state_34349;
state_34349 = G__34490;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = function(state_34349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1.call(this,state_34349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__;
})()
;})(__34469,switch__34039__auto__,c__34129__auto___34482,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async))
})();
var state__34131__auto__ = (function (){var statearr_34360 = f__34130__auto__.call(null);
(statearr_34360[(6)] = c__34129__auto___34482);

return statearr_34360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(__34469,c__34129__auto___34482,G__34312_34470,G__34312_34471__$1,n__31167__auto___34468,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34312_34471__$1)].join('')));

}

var G__34491 = (__34469 + (1));
__34469 = G__34491;
continue;
} else {
}
break;
}

var c__34129__auto___34492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___34492,jobs,results,process,async){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___34492,jobs,results,process,async){
return (function (state_34382){
var state_val_34383 = (state_34382[(1)]);
if((state_val_34383 === (1))){
var state_34382__$1 = state_34382;
var statearr_34384_34493 = state_34382__$1;
(statearr_34384_34493[(2)] = null);

(statearr_34384_34493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (2))){
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34382__$1,(4),from);
} else {
if((state_val_34383 === (3))){
var inst_34380 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34382__$1,inst_34380);
} else {
if((state_val_34383 === (4))){
var inst_34363 = (state_34382[(7)]);
var inst_34363__$1 = (state_34382[(2)]);
var inst_34364 = (inst_34363__$1 == null);
var state_34382__$1 = (function (){var statearr_34385 = state_34382;
(statearr_34385[(7)] = inst_34363__$1);

return statearr_34385;
})();
if(cljs.core.truth_(inst_34364)){
var statearr_34386_34494 = state_34382__$1;
(statearr_34386_34494[(1)] = (5));

} else {
var statearr_34387_34495 = state_34382__$1;
(statearr_34387_34495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (5))){
var inst_34366 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34382__$1 = state_34382;
var statearr_34388_34496 = state_34382__$1;
(statearr_34388_34496[(2)] = inst_34366);

(statearr_34388_34496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (6))){
var inst_34368 = (state_34382[(8)]);
var inst_34363 = (state_34382[(7)]);
var inst_34368__$1 = cljs.core.async.chan.call(null,(1));
var inst_34369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34370 = [inst_34363,inst_34368__$1];
var inst_34371 = (new cljs.core.PersistentVector(null,2,(5),inst_34369,inst_34370,null));
var state_34382__$1 = (function (){var statearr_34389 = state_34382;
(statearr_34389[(8)] = inst_34368__$1);

return statearr_34389;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34382__$1,(8),jobs,inst_34371);
} else {
if((state_val_34383 === (7))){
var inst_34378 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34390_34497 = state_34382__$1;
(statearr_34390_34497[(2)] = inst_34378);

(statearr_34390_34497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (8))){
var inst_34368 = (state_34382[(8)]);
var inst_34373 = (state_34382[(2)]);
var state_34382__$1 = (function (){var statearr_34391 = state_34382;
(statearr_34391[(9)] = inst_34373);

return statearr_34391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34382__$1,(9),results,inst_34368);
} else {
if((state_val_34383 === (9))){
var inst_34375 = (state_34382[(2)]);
var state_34382__$1 = (function (){var statearr_34392 = state_34382;
(statearr_34392[(10)] = inst_34375);

return statearr_34392;
})();
var statearr_34393_34498 = state_34382__$1;
(statearr_34393_34498[(2)] = null);

(statearr_34393_34498[(1)] = (2));


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
});})(c__34129__auto___34492,jobs,results,process,async))
;
return ((function (switch__34039__auto__,c__34129__auto___34492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0 = (function (){
var statearr_34394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__);

(statearr_34394[(1)] = (1));

return statearr_34394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1 = (function (state_34382){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34395){if((e34395 instanceof Object)){
var ex__34043__auto__ = e34395;
var statearr_34396_34499 = state_34382;
(statearr_34396_34499[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34500 = state_34382;
state_34382 = G__34500;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = function(state_34382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1.call(this,state_34382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___34492,jobs,results,process,async))
})();
var state__34131__auto__ = (function (){var statearr_34397 = f__34130__auto__.call(null);
(statearr_34397[(6)] = c__34129__auto___34492);

return statearr_34397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___34492,jobs,results,process,async))
);


var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__,jobs,results,process,async){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__,jobs,results,process,async){
return (function (state_34435){
var state_val_34436 = (state_34435[(1)]);
if((state_val_34436 === (7))){
var inst_34431 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
var statearr_34437_34501 = state_34435__$1;
(statearr_34437_34501[(2)] = inst_34431);

(statearr_34437_34501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (20))){
var state_34435__$1 = state_34435;
var statearr_34438_34502 = state_34435__$1;
(statearr_34438_34502[(2)] = null);

(statearr_34438_34502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (1))){
var state_34435__$1 = state_34435;
var statearr_34439_34503 = state_34435__$1;
(statearr_34439_34503[(2)] = null);

(statearr_34439_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (4))){
var inst_34400 = (state_34435[(7)]);
var inst_34400__$1 = (state_34435[(2)]);
var inst_34401 = (inst_34400__$1 == null);
var state_34435__$1 = (function (){var statearr_34440 = state_34435;
(statearr_34440[(7)] = inst_34400__$1);

return statearr_34440;
})();
if(cljs.core.truth_(inst_34401)){
var statearr_34441_34504 = state_34435__$1;
(statearr_34441_34504[(1)] = (5));

} else {
var statearr_34442_34505 = state_34435__$1;
(statearr_34442_34505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (15))){
var inst_34413 = (state_34435[(8)]);
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34435__$1,(18),to,inst_34413);
} else {
if((state_val_34436 === (21))){
var inst_34426 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
var statearr_34443_34506 = state_34435__$1;
(statearr_34443_34506[(2)] = inst_34426);

(statearr_34443_34506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (13))){
var inst_34428 = (state_34435[(2)]);
var state_34435__$1 = (function (){var statearr_34444 = state_34435;
(statearr_34444[(9)] = inst_34428);

return statearr_34444;
})();
var statearr_34445_34507 = state_34435__$1;
(statearr_34445_34507[(2)] = null);

(statearr_34445_34507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (6))){
var inst_34400 = (state_34435[(7)]);
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34435__$1,(11),inst_34400);
} else {
if((state_val_34436 === (17))){
var inst_34421 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
if(cljs.core.truth_(inst_34421)){
var statearr_34446_34508 = state_34435__$1;
(statearr_34446_34508[(1)] = (19));

} else {
var statearr_34447_34509 = state_34435__$1;
(statearr_34447_34509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (3))){
var inst_34433 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34435__$1,inst_34433);
} else {
if((state_val_34436 === (12))){
var inst_34410 = (state_34435[(10)]);
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34435__$1,(14),inst_34410);
} else {
if((state_val_34436 === (2))){
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34435__$1,(4),results);
} else {
if((state_val_34436 === (19))){
var state_34435__$1 = state_34435;
var statearr_34448_34510 = state_34435__$1;
(statearr_34448_34510[(2)] = null);

(statearr_34448_34510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (11))){
var inst_34410 = (state_34435[(2)]);
var state_34435__$1 = (function (){var statearr_34449 = state_34435;
(statearr_34449[(10)] = inst_34410);

return statearr_34449;
})();
var statearr_34450_34511 = state_34435__$1;
(statearr_34450_34511[(2)] = null);

(statearr_34450_34511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (9))){
var state_34435__$1 = state_34435;
var statearr_34451_34512 = state_34435__$1;
(statearr_34451_34512[(2)] = null);

(statearr_34451_34512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (5))){
var state_34435__$1 = state_34435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34452_34513 = state_34435__$1;
(statearr_34452_34513[(1)] = (8));

} else {
var statearr_34453_34514 = state_34435__$1;
(statearr_34453_34514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (14))){
var inst_34413 = (state_34435[(8)]);
var inst_34415 = (state_34435[(11)]);
var inst_34413__$1 = (state_34435[(2)]);
var inst_34414 = (inst_34413__$1 == null);
var inst_34415__$1 = cljs.core.not.call(null,inst_34414);
var state_34435__$1 = (function (){var statearr_34454 = state_34435;
(statearr_34454[(8)] = inst_34413__$1);

(statearr_34454[(11)] = inst_34415__$1);

return statearr_34454;
})();
if(inst_34415__$1){
var statearr_34455_34515 = state_34435__$1;
(statearr_34455_34515[(1)] = (15));

} else {
var statearr_34456_34516 = state_34435__$1;
(statearr_34456_34516[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (16))){
var inst_34415 = (state_34435[(11)]);
var state_34435__$1 = state_34435;
var statearr_34457_34517 = state_34435__$1;
(statearr_34457_34517[(2)] = inst_34415);

(statearr_34457_34517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (10))){
var inst_34407 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
var statearr_34458_34518 = state_34435__$1;
(statearr_34458_34518[(2)] = inst_34407);

(statearr_34458_34518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (18))){
var inst_34418 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
var statearr_34459_34519 = state_34435__$1;
(statearr_34459_34519[(2)] = inst_34418);

(statearr_34459_34519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (8))){
var inst_34404 = cljs.core.async.close_BANG_.call(null,to);
var state_34435__$1 = state_34435;
var statearr_34460_34520 = state_34435__$1;
(statearr_34460_34520[(2)] = inst_34404);

(statearr_34460_34520[(1)] = (10));


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
});})(c__34129__auto__,jobs,results,process,async))
;
return ((function (switch__34039__auto__,c__34129__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0 = (function (){
var statearr_34461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__);

(statearr_34461[(1)] = (1));

return statearr_34461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1 = (function (state_34435){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34462){if((e34462 instanceof Object)){
var ex__34043__auto__ = e34462;
var statearr_34463_34521 = state_34435;
(statearr_34463_34521[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34522 = state_34435;
state_34435 = G__34522;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__ = function(state_34435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1.call(this,state_34435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__,jobs,results,process,async))
})();
var state__34131__auto__ = (function (){var statearr_34464 = f__34130__auto__.call(null);
(statearr_34464[(6)] = c__34129__auto__);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__,jobs,results,process,async))
);

return c__34129__auto__;
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
var G__34524 = arguments.length;
switch (G__34524) {
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
var G__34527 = arguments.length;
switch (G__34527) {
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
var G__34530 = arguments.length;
switch (G__34530) {
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
var c__34129__auto___34579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___34579,tc,fc){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___34579,tc,fc){
return (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_34580 = state_34556__$1;
(statearr_34558_34580[(2)] = inst_34552);

(statearr_34558_34580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_34581 = state_34556__$1;
(statearr_34559_34581[(2)] = null);

(statearr_34559_34581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34533 = (state_34556[(7)]);
var inst_34533__$1 = (state_34556[(2)]);
var inst_34534 = (inst_34533__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34533__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34534)){
var statearr_34561_34582 = state_34556__$1;
(statearr_34561_34582[(1)] = (5));

} else {
var statearr_34562_34583 = state_34556__$1;
(statearr_34562_34583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (13))){
var state_34556__$1 = state_34556;
var statearr_34563_34584 = state_34556__$1;
(statearr_34563_34584[(2)] = null);

(statearr_34563_34584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34533 = (state_34556[(7)]);
var inst_34539 = p.call(null,inst_34533);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34539)){
var statearr_34564_34585 = state_34556__$1;
(statearr_34564_34585[(1)] = (9));

} else {
var statearr_34565_34586 = state_34556__$1;
(statearr_34565_34586[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (3))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (12))){
var state_34556__$1 = state_34556;
var statearr_34566_34587 = state_34556__$1;
(statearr_34566_34587[(2)] = null);

(statearr_34566_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34556__$1,(4),ch);
} else {
if((state_val_34557 === (11))){
var inst_34533 = (state_34556[(7)]);
var inst_34543 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34556__$1,(8),inst_34543,inst_34533);
} else {
if((state_val_34557 === (9))){
var state_34556__$1 = state_34556;
var statearr_34567_34588 = state_34556__$1;
(statearr_34567_34588[(2)] = tc);

(statearr_34567_34588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34536 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34537 = cljs.core.async.close_BANG_.call(null,fc);
var state_34556__$1 = (function (){var statearr_34568 = state_34556;
(statearr_34568[(8)] = inst_34536);

return statearr_34568;
})();
var statearr_34569_34589 = state_34556__$1;
(statearr_34569_34589[(2)] = inst_34537);

(statearr_34569_34589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (14))){
var inst_34550 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34570_34590 = state_34556__$1;
(statearr_34570_34590[(2)] = inst_34550);

(statearr_34570_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (10))){
var state_34556__$1 = state_34556;
var statearr_34571_34591 = state_34556__$1;
(statearr_34571_34591[(2)] = fc);

(statearr_34571_34591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34545 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34545)){
var statearr_34572_34592 = state_34556__$1;
(statearr_34572_34592[(1)] = (12));

} else {
var statearr_34573_34593 = state_34556__$1;
(statearr_34573_34593[(1)] = (13));

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
});})(c__34129__auto___34579,tc,fc))
;
return ((function (switch__34039__auto__,c__34129__auto___34579,tc,fc){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_34574 = [null,null,null,null,null,null,null,null,null];
(statearr_34574[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_34574[(1)] = (1));

return statearr_34574;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_34556){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34575){if((e34575 instanceof Object)){
var ex__34043__auto__ = e34575;
var statearr_34576_34594 = state_34556;
(statearr_34576_34594[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34595 = state_34556;
state_34556 = G__34595;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___34579,tc,fc))
})();
var state__34131__auto__ = (function (){var statearr_34577 = f__34130__auto__.call(null);
(statearr_34577[(6)] = c__34129__auto___34579);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___34579,tc,fc))
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
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__){
return (function (state_34616){
var state_val_34617 = (state_34616[(1)]);
if((state_val_34617 === (7))){
var inst_34612 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34618_34636 = state_34616__$1;
(statearr_34618_34636[(2)] = inst_34612);

(statearr_34618_34636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (1))){
var inst_34596 = init;
var state_34616__$1 = (function (){var statearr_34619 = state_34616;
(statearr_34619[(7)] = inst_34596);

return statearr_34619;
})();
var statearr_34620_34637 = state_34616__$1;
(statearr_34620_34637[(2)] = null);

(statearr_34620_34637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (4))){
var inst_34599 = (state_34616[(8)]);
var inst_34599__$1 = (state_34616[(2)]);
var inst_34600 = (inst_34599__$1 == null);
var state_34616__$1 = (function (){var statearr_34621 = state_34616;
(statearr_34621[(8)] = inst_34599__$1);

return statearr_34621;
})();
if(cljs.core.truth_(inst_34600)){
var statearr_34622_34638 = state_34616__$1;
(statearr_34622_34638[(1)] = (5));

} else {
var statearr_34623_34639 = state_34616__$1;
(statearr_34623_34639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (6))){
var inst_34599 = (state_34616[(8)]);
var inst_34603 = (state_34616[(9)]);
var inst_34596 = (state_34616[(7)]);
var inst_34603__$1 = f.call(null,inst_34596,inst_34599);
var inst_34604 = cljs.core.reduced_QMARK_.call(null,inst_34603__$1);
var state_34616__$1 = (function (){var statearr_34624 = state_34616;
(statearr_34624[(9)] = inst_34603__$1);

return statearr_34624;
})();
if(inst_34604){
var statearr_34625_34640 = state_34616__$1;
(statearr_34625_34640[(1)] = (8));

} else {
var statearr_34626_34641 = state_34616__$1;
(statearr_34626_34641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (3))){
var inst_34614 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34616__$1,inst_34614);
} else {
if((state_val_34617 === (2))){
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(4),ch);
} else {
if((state_val_34617 === (9))){
var inst_34603 = (state_34616[(9)]);
var inst_34596 = inst_34603;
var state_34616__$1 = (function (){var statearr_34627 = state_34616;
(statearr_34627[(7)] = inst_34596);

return statearr_34627;
})();
var statearr_34628_34642 = state_34616__$1;
(statearr_34628_34642[(2)] = null);

(statearr_34628_34642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (5))){
var inst_34596 = (state_34616[(7)]);
var state_34616__$1 = state_34616;
var statearr_34629_34643 = state_34616__$1;
(statearr_34629_34643[(2)] = inst_34596);

(statearr_34629_34643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (10))){
var inst_34610 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34630_34644 = state_34616__$1;
(statearr_34630_34644[(2)] = inst_34610);

(statearr_34630_34644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (8))){
var inst_34603 = (state_34616[(9)]);
var inst_34606 = cljs.core.deref.call(null,inst_34603);
var state_34616__$1 = state_34616;
var statearr_34631_34645 = state_34616__$1;
(statearr_34631_34645[(2)] = inst_34606);

(statearr_34631_34645[(1)] = (10));


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
});})(c__34129__auto__))
;
return ((function (switch__34039__auto__,c__34129__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34040__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34040__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$reduce_$_state_machine__34040__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$reduce_$_state_machine__34040__auto____1 = (function (state_34616){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34633){if((e34633 instanceof Object)){
var ex__34043__auto__ = e34633;
var statearr_34634_34646 = state_34616;
(statearr_34634_34646[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34647 = state_34616;
state_34616 = G__34647;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34040__auto__ = function(state_34616){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34040__auto____1.call(this,state_34616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34040__auto____0;
cljs$core$async$reduce_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34040__auto____1;
return cljs$core$async$reduce_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__))
})();
var state__34131__auto__ = (function (){var statearr_34635 = f__34130__auto__.call(null);
(statearr_34635[(6)] = c__34129__auto__);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__))
);

return c__34129__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__,f__$1){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__,f__$1){
return (function (state_34653){
var state_val_34654 = (state_34653[(1)]);
if((state_val_34654 === (1))){
var inst_34648 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34653__$1,(2),inst_34648);
} else {
if((state_val_34654 === (2))){
var inst_34650 = (state_34653[(2)]);
var inst_34651 = f__$1.call(null,inst_34650);
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34653__$1,inst_34651);
} else {
return null;
}
}
});})(c__34129__auto__,f__$1))
;
return ((function (switch__34039__auto__,c__34129__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34040__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34040__auto____0 = (function (){
var statearr_34655 = [null,null,null,null,null,null,null];
(statearr_34655[(0)] = cljs$core$async$transduce_$_state_machine__34040__auto__);

(statearr_34655[(1)] = (1));

return statearr_34655;
});
var cljs$core$async$transduce_$_state_machine__34040__auto____1 = (function (state_34653){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34656){if((e34656 instanceof Object)){
var ex__34043__auto__ = e34656;
var statearr_34657_34659 = state_34653;
(statearr_34657_34659[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34660 = state_34653;
state_34653 = G__34660;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34040__auto__ = function(state_34653){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34040__auto____1.call(this,state_34653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34040__auto____0;
cljs$core$async$transduce_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34040__auto____1;
return cljs$core$async$transduce_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__,f__$1))
})();
var state__34131__auto__ = (function (){var statearr_34658 = f__34130__auto__.call(null);
(statearr_34658[(6)] = c__34129__auto__);

return statearr_34658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__,f__$1))
);

return c__34129__auto__;
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
var G__34662 = arguments.length;
switch (G__34662) {
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
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__){
return (function (state_34687){
var state_val_34688 = (state_34687[(1)]);
if((state_val_34688 === (7))){
var inst_34669 = (state_34687[(2)]);
var state_34687__$1 = state_34687;
var statearr_34689_34710 = state_34687__$1;
(statearr_34689_34710[(2)] = inst_34669);

(statearr_34689_34710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (1))){
var inst_34663 = cljs.core.seq.call(null,coll);
var inst_34664 = inst_34663;
var state_34687__$1 = (function (){var statearr_34690 = state_34687;
(statearr_34690[(7)] = inst_34664);

return statearr_34690;
})();
var statearr_34691_34711 = state_34687__$1;
(statearr_34691_34711[(2)] = null);

(statearr_34691_34711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (4))){
var inst_34664 = (state_34687[(7)]);
var inst_34667 = cljs.core.first.call(null,inst_34664);
var state_34687__$1 = state_34687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34687__$1,(7),ch,inst_34667);
} else {
if((state_val_34688 === (13))){
var inst_34681 = (state_34687[(2)]);
var state_34687__$1 = state_34687;
var statearr_34692_34712 = state_34687__$1;
(statearr_34692_34712[(2)] = inst_34681);

(statearr_34692_34712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (6))){
var inst_34672 = (state_34687[(2)]);
var state_34687__$1 = state_34687;
if(cljs.core.truth_(inst_34672)){
var statearr_34693_34713 = state_34687__$1;
(statearr_34693_34713[(1)] = (8));

} else {
var statearr_34694_34714 = state_34687__$1;
(statearr_34694_34714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (3))){
var inst_34685 = (state_34687[(2)]);
var state_34687__$1 = state_34687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34687__$1,inst_34685);
} else {
if((state_val_34688 === (12))){
var state_34687__$1 = state_34687;
var statearr_34695_34715 = state_34687__$1;
(statearr_34695_34715[(2)] = null);

(statearr_34695_34715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (2))){
var inst_34664 = (state_34687[(7)]);
var state_34687__$1 = state_34687;
if(cljs.core.truth_(inst_34664)){
var statearr_34696_34716 = state_34687__$1;
(statearr_34696_34716[(1)] = (4));

} else {
var statearr_34697_34717 = state_34687__$1;
(statearr_34697_34717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (11))){
var inst_34678 = cljs.core.async.close_BANG_.call(null,ch);
var state_34687__$1 = state_34687;
var statearr_34698_34718 = state_34687__$1;
(statearr_34698_34718[(2)] = inst_34678);

(statearr_34698_34718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (9))){
var state_34687__$1 = state_34687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34699_34719 = state_34687__$1;
(statearr_34699_34719[(1)] = (11));

} else {
var statearr_34700_34720 = state_34687__$1;
(statearr_34700_34720[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (5))){
var inst_34664 = (state_34687[(7)]);
var state_34687__$1 = state_34687;
var statearr_34701_34721 = state_34687__$1;
(statearr_34701_34721[(2)] = inst_34664);

(statearr_34701_34721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (10))){
var inst_34683 = (state_34687[(2)]);
var state_34687__$1 = state_34687;
var statearr_34702_34722 = state_34687__$1;
(statearr_34702_34722[(2)] = inst_34683);

(statearr_34702_34722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34688 === (8))){
var inst_34664 = (state_34687[(7)]);
var inst_34674 = cljs.core.next.call(null,inst_34664);
var inst_34664__$1 = inst_34674;
var state_34687__$1 = (function (){var statearr_34703 = state_34687;
(statearr_34703[(7)] = inst_34664__$1);

return statearr_34703;
})();
var statearr_34704_34723 = state_34687__$1;
(statearr_34704_34723[(2)] = null);

(statearr_34704_34723[(1)] = (2));


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
});})(c__34129__auto__))
;
return ((function (switch__34039__auto__,c__34129__auto__){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_34705 = [null,null,null,null,null,null,null,null];
(statearr_34705[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_34705[(1)] = (1));

return statearr_34705;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_34687){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34706){if((e34706 instanceof Object)){
var ex__34043__auto__ = e34706;
var statearr_34707_34724 = state_34687;
(statearr_34707_34724[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34725 = state_34687;
state_34687 = G__34725;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_34687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_34687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__))
})();
var state__34131__auto__ = (function (){var statearr_34708 = f__34130__auto__.call(null);
(statearr_34708[(6)] = c__34129__auto__);

return statearr_34708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__))
);

return c__34129__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30855__auto__ = (((_ == null))?null:_);
var m__30856__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,_);
} else {
var m__30856__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30856__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m,ch);
} else {
var m__30856__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m);
} else {
var m__30856__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34726 = (function (ch,cs,meta34727){
this.ch = ch;
this.cs = cs;
this.meta34727 = meta34727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34728,meta34727__$1){
var self__ = this;
var _34728__$1 = this;
return (new cljs.core.async.t_cljs$core$async34726(self__.ch,self__.cs,meta34727__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34728){
var self__ = this;
var _34728__$1 = this;
return self__.meta34727;
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34727","meta34727",-34965650,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34726";

cljs.core.async.t_cljs$core$async34726.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async34726");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34726 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34726(ch__$1,cs__$1,meta34727){
return (new cljs.core.async.t_cljs$core$async34726(ch__$1,cs__$1,meta34727));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34726(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34129__auto___34948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___34948,cs,m,dchan,dctr,done){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___34948,cs,m,dchan,dctr,done){
return (function (state_34863){
var state_val_34864 = (state_34863[(1)]);
if((state_val_34864 === (7))){
var inst_34859 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34865_34949 = state_34863__$1;
(statearr_34865_34949[(2)] = inst_34859);

(statearr_34865_34949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (20))){
var inst_34762 = (state_34863[(7)]);
var inst_34774 = cljs.core.first.call(null,inst_34762);
var inst_34775 = cljs.core.nth.call(null,inst_34774,(0),null);
var inst_34776 = cljs.core.nth.call(null,inst_34774,(1),null);
var state_34863__$1 = (function (){var statearr_34866 = state_34863;
(statearr_34866[(8)] = inst_34775);

return statearr_34866;
})();
if(cljs.core.truth_(inst_34776)){
var statearr_34867_34950 = state_34863__$1;
(statearr_34867_34950[(1)] = (22));

} else {
var statearr_34868_34951 = state_34863__$1;
(statearr_34868_34951[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (27))){
var inst_34811 = (state_34863[(9)]);
var inst_34804 = (state_34863[(10)]);
var inst_34731 = (state_34863[(11)]);
var inst_34806 = (state_34863[(12)]);
var inst_34811__$1 = cljs.core._nth.call(null,inst_34804,inst_34806);
var inst_34812 = cljs.core.async.put_BANG_.call(null,inst_34811__$1,inst_34731,done);
var state_34863__$1 = (function (){var statearr_34869 = state_34863;
(statearr_34869[(9)] = inst_34811__$1);

return statearr_34869;
})();
if(cljs.core.truth_(inst_34812)){
var statearr_34870_34952 = state_34863__$1;
(statearr_34870_34952[(1)] = (30));

} else {
var statearr_34871_34953 = state_34863__$1;
(statearr_34871_34953[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (1))){
var state_34863__$1 = state_34863;
var statearr_34872_34954 = state_34863__$1;
(statearr_34872_34954[(2)] = null);

(statearr_34872_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (24))){
var inst_34762 = (state_34863[(7)]);
var inst_34781 = (state_34863[(2)]);
var inst_34782 = cljs.core.next.call(null,inst_34762);
var inst_34740 = inst_34782;
var inst_34741 = null;
var inst_34742 = (0);
var inst_34743 = (0);
var state_34863__$1 = (function (){var statearr_34873 = state_34863;
(statearr_34873[(13)] = inst_34740);

(statearr_34873[(14)] = inst_34741);

(statearr_34873[(15)] = inst_34742);

(statearr_34873[(16)] = inst_34743);

(statearr_34873[(17)] = inst_34781);

return statearr_34873;
})();
var statearr_34874_34955 = state_34863__$1;
(statearr_34874_34955[(2)] = null);

(statearr_34874_34955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (39))){
var state_34863__$1 = state_34863;
var statearr_34878_34956 = state_34863__$1;
(statearr_34878_34956[(2)] = null);

(statearr_34878_34956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (4))){
var inst_34731 = (state_34863[(11)]);
var inst_34731__$1 = (state_34863[(2)]);
var inst_34732 = (inst_34731__$1 == null);
var state_34863__$1 = (function (){var statearr_34879 = state_34863;
(statearr_34879[(11)] = inst_34731__$1);

return statearr_34879;
})();
if(cljs.core.truth_(inst_34732)){
var statearr_34880_34957 = state_34863__$1;
(statearr_34880_34957[(1)] = (5));

} else {
var statearr_34881_34958 = state_34863__$1;
(statearr_34881_34958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (15))){
var inst_34740 = (state_34863[(13)]);
var inst_34741 = (state_34863[(14)]);
var inst_34742 = (state_34863[(15)]);
var inst_34743 = (state_34863[(16)]);
var inst_34758 = (state_34863[(2)]);
var inst_34759 = (inst_34743 + (1));
var tmp34875 = inst_34740;
var tmp34876 = inst_34741;
var tmp34877 = inst_34742;
var inst_34740__$1 = tmp34875;
var inst_34741__$1 = tmp34876;
var inst_34742__$1 = tmp34877;
var inst_34743__$1 = inst_34759;
var state_34863__$1 = (function (){var statearr_34882 = state_34863;
(statearr_34882[(13)] = inst_34740__$1);

(statearr_34882[(14)] = inst_34741__$1);

(statearr_34882[(18)] = inst_34758);

(statearr_34882[(15)] = inst_34742__$1);

(statearr_34882[(16)] = inst_34743__$1);

return statearr_34882;
})();
var statearr_34883_34959 = state_34863__$1;
(statearr_34883_34959[(2)] = null);

(statearr_34883_34959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (21))){
var inst_34785 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34887_34960 = state_34863__$1;
(statearr_34887_34960[(2)] = inst_34785);

(statearr_34887_34960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (31))){
var inst_34811 = (state_34863[(9)]);
var inst_34815 = done.call(null,null);
var inst_34816 = cljs.core.async.untap_STAR_.call(null,m,inst_34811);
var state_34863__$1 = (function (){var statearr_34888 = state_34863;
(statearr_34888[(19)] = inst_34815);

return statearr_34888;
})();
var statearr_34889_34961 = state_34863__$1;
(statearr_34889_34961[(2)] = inst_34816);

(statearr_34889_34961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (32))){
var inst_34803 = (state_34863[(20)]);
var inst_34804 = (state_34863[(10)]);
var inst_34805 = (state_34863[(21)]);
var inst_34806 = (state_34863[(12)]);
var inst_34818 = (state_34863[(2)]);
var inst_34819 = (inst_34806 + (1));
var tmp34884 = inst_34803;
var tmp34885 = inst_34804;
var tmp34886 = inst_34805;
var inst_34803__$1 = tmp34884;
var inst_34804__$1 = tmp34885;
var inst_34805__$1 = tmp34886;
var inst_34806__$1 = inst_34819;
var state_34863__$1 = (function (){var statearr_34890 = state_34863;
(statearr_34890[(20)] = inst_34803__$1);

(statearr_34890[(22)] = inst_34818);

(statearr_34890[(10)] = inst_34804__$1);

(statearr_34890[(21)] = inst_34805__$1);

(statearr_34890[(12)] = inst_34806__$1);

return statearr_34890;
})();
var statearr_34891_34962 = state_34863__$1;
(statearr_34891_34962[(2)] = null);

(statearr_34891_34962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (40))){
var inst_34831 = (state_34863[(23)]);
var inst_34835 = done.call(null,null);
var inst_34836 = cljs.core.async.untap_STAR_.call(null,m,inst_34831);
var state_34863__$1 = (function (){var statearr_34892 = state_34863;
(statearr_34892[(24)] = inst_34835);

return statearr_34892;
})();
var statearr_34893_34963 = state_34863__$1;
(statearr_34893_34963[(2)] = inst_34836);

(statearr_34893_34963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (33))){
var inst_34822 = (state_34863[(25)]);
var inst_34824 = cljs.core.chunked_seq_QMARK_.call(null,inst_34822);
var state_34863__$1 = state_34863;
if(inst_34824){
var statearr_34894_34964 = state_34863__$1;
(statearr_34894_34964[(1)] = (36));

} else {
var statearr_34895_34965 = state_34863__$1;
(statearr_34895_34965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (13))){
var inst_34752 = (state_34863[(26)]);
var inst_34755 = cljs.core.async.close_BANG_.call(null,inst_34752);
var state_34863__$1 = state_34863;
var statearr_34896_34966 = state_34863__$1;
(statearr_34896_34966[(2)] = inst_34755);

(statearr_34896_34966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (22))){
var inst_34775 = (state_34863[(8)]);
var inst_34778 = cljs.core.async.close_BANG_.call(null,inst_34775);
var state_34863__$1 = state_34863;
var statearr_34897_34967 = state_34863__$1;
(statearr_34897_34967[(2)] = inst_34778);

(statearr_34897_34967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (36))){
var inst_34822 = (state_34863[(25)]);
var inst_34826 = cljs.core.chunk_first.call(null,inst_34822);
var inst_34827 = cljs.core.chunk_rest.call(null,inst_34822);
var inst_34828 = cljs.core.count.call(null,inst_34826);
var inst_34803 = inst_34827;
var inst_34804 = inst_34826;
var inst_34805 = inst_34828;
var inst_34806 = (0);
var state_34863__$1 = (function (){var statearr_34898 = state_34863;
(statearr_34898[(20)] = inst_34803);

(statearr_34898[(10)] = inst_34804);

(statearr_34898[(21)] = inst_34805);

(statearr_34898[(12)] = inst_34806);

return statearr_34898;
})();
var statearr_34899_34968 = state_34863__$1;
(statearr_34899_34968[(2)] = null);

(statearr_34899_34968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (41))){
var inst_34822 = (state_34863[(25)]);
var inst_34838 = (state_34863[(2)]);
var inst_34839 = cljs.core.next.call(null,inst_34822);
var inst_34803 = inst_34839;
var inst_34804 = null;
var inst_34805 = (0);
var inst_34806 = (0);
var state_34863__$1 = (function (){var statearr_34900 = state_34863;
(statearr_34900[(20)] = inst_34803);

(statearr_34900[(10)] = inst_34804);

(statearr_34900[(21)] = inst_34805);

(statearr_34900[(27)] = inst_34838);

(statearr_34900[(12)] = inst_34806);

return statearr_34900;
})();
var statearr_34901_34969 = state_34863__$1;
(statearr_34901_34969[(2)] = null);

(statearr_34901_34969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (43))){
var state_34863__$1 = state_34863;
var statearr_34902_34970 = state_34863__$1;
(statearr_34902_34970[(2)] = null);

(statearr_34902_34970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (29))){
var inst_34847 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34903_34971 = state_34863__$1;
(statearr_34903_34971[(2)] = inst_34847);

(statearr_34903_34971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (44))){
var inst_34856 = (state_34863[(2)]);
var state_34863__$1 = (function (){var statearr_34904 = state_34863;
(statearr_34904[(28)] = inst_34856);

return statearr_34904;
})();
var statearr_34905_34972 = state_34863__$1;
(statearr_34905_34972[(2)] = null);

(statearr_34905_34972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (6))){
var inst_34795 = (state_34863[(29)]);
var inst_34794 = cljs.core.deref.call(null,cs);
var inst_34795__$1 = cljs.core.keys.call(null,inst_34794);
var inst_34796 = cljs.core.count.call(null,inst_34795__$1);
var inst_34797 = cljs.core.reset_BANG_.call(null,dctr,inst_34796);
var inst_34802 = cljs.core.seq.call(null,inst_34795__$1);
var inst_34803 = inst_34802;
var inst_34804 = null;
var inst_34805 = (0);
var inst_34806 = (0);
var state_34863__$1 = (function (){var statearr_34906 = state_34863;
(statearr_34906[(30)] = inst_34797);

(statearr_34906[(20)] = inst_34803);

(statearr_34906[(10)] = inst_34804);

(statearr_34906[(29)] = inst_34795__$1);

(statearr_34906[(21)] = inst_34805);

(statearr_34906[(12)] = inst_34806);

return statearr_34906;
})();
var statearr_34907_34973 = state_34863__$1;
(statearr_34907_34973[(2)] = null);

(statearr_34907_34973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (28))){
var inst_34803 = (state_34863[(20)]);
var inst_34822 = (state_34863[(25)]);
var inst_34822__$1 = cljs.core.seq.call(null,inst_34803);
var state_34863__$1 = (function (){var statearr_34908 = state_34863;
(statearr_34908[(25)] = inst_34822__$1);

return statearr_34908;
})();
if(inst_34822__$1){
var statearr_34909_34974 = state_34863__$1;
(statearr_34909_34974[(1)] = (33));

} else {
var statearr_34910_34975 = state_34863__$1;
(statearr_34910_34975[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (25))){
var inst_34805 = (state_34863[(21)]);
var inst_34806 = (state_34863[(12)]);
var inst_34808 = (inst_34806 < inst_34805);
var inst_34809 = inst_34808;
var state_34863__$1 = state_34863;
if(cljs.core.truth_(inst_34809)){
var statearr_34911_34976 = state_34863__$1;
(statearr_34911_34976[(1)] = (27));

} else {
var statearr_34912_34977 = state_34863__$1;
(statearr_34912_34977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (34))){
var state_34863__$1 = state_34863;
var statearr_34913_34978 = state_34863__$1;
(statearr_34913_34978[(2)] = null);

(statearr_34913_34978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (17))){
var state_34863__$1 = state_34863;
var statearr_34914_34979 = state_34863__$1;
(statearr_34914_34979[(2)] = null);

(statearr_34914_34979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (3))){
var inst_34861 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34863__$1,inst_34861);
} else {
if((state_val_34864 === (12))){
var inst_34790 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34915_34980 = state_34863__$1;
(statearr_34915_34980[(2)] = inst_34790);

(statearr_34915_34980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (2))){
var state_34863__$1 = state_34863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34863__$1,(4),ch);
} else {
if((state_val_34864 === (23))){
var state_34863__$1 = state_34863;
var statearr_34916_34981 = state_34863__$1;
(statearr_34916_34981[(2)] = null);

(statearr_34916_34981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (35))){
var inst_34845 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34917_34982 = state_34863__$1;
(statearr_34917_34982[(2)] = inst_34845);

(statearr_34917_34982[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (19))){
var inst_34762 = (state_34863[(7)]);
var inst_34766 = cljs.core.chunk_first.call(null,inst_34762);
var inst_34767 = cljs.core.chunk_rest.call(null,inst_34762);
var inst_34768 = cljs.core.count.call(null,inst_34766);
var inst_34740 = inst_34767;
var inst_34741 = inst_34766;
var inst_34742 = inst_34768;
var inst_34743 = (0);
var state_34863__$1 = (function (){var statearr_34918 = state_34863;
(statearr_34918[(13)] = inst_34740);

(statearr_34918[(14)] = inst_34741);

(statearr_34918[(15)] = inst_34742);

(statearr_34918[(16)] = inst_34743);

return statearr_34918;
})();
var statearr_34919_34983 = state_34863__$1;
(statearr_34919_34983[(2)] = null);

(statearr_34919_34983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (11))){
var inst_34740 = (state_34863[(13)]);
var inst_34762 = (state_34863[(7)]);
var inst_34762__$1 = cljs.core.seq.call(null,inst_34740);
var state_34863__$1 = (function (){var statearr_34920 = state_34863;
(statearr_34920[(7)] = inst_34762__$1);

return statearr_34920;
})();
if(inst_34762__$1){
var statearr_34921_34984 = state_34863__$1;
(statearr_34921_34984[(1)] = (16));

} else {
var statearr_34922_34985 = state_34863__$1;
(statearr_34922_34985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (9))){
var inst_34792 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34923_34986 = state_34863__$1;
(statearr_34923_34986[(2)] = inst_34792);

(statearr_34923_34986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (5))){
var inst_34738 = cljs.core.deref.call(null,cs);
var inst_34739 = cljs.core.seq.call(null,inst_34738);
var inst_34740 = inst_34739;
var inst_34741 = null;
var inst_34742 = (0);
var inst_34743 = (0);
var state_34863__$1 = (function (){var statearr_34924 = state_34863;
(statearr_34924[(13)] = inst_34740);

(statearr_34924[(14)] = inst_34741);

(statearr_34924[(15)] = inst_34742);

(statearr_34924[(16)] = inst_34743);

return statearr_34924;
})();
var statearr_34925_34987 = state_34863__$1;
(statearr_34925_34987[(2)] = null);

(statearr_34925_34987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (14))){
var state_34863__$1 = state_34863;
var statearr_34926_34988 = state_34863__$1;
(statearr_34926_34988[(2)] = null);

(statearr_34926_34988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (45))){
var inst_34853 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34927_34989 = state_34863__$1;
(statearr_34927_34989[(2)] = inst_34853);

(statearr_34927_34989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (26))){
var inst_34795 = (state_34863[(29)]);
var inst_34849 = (state_34863[(2)]);
var inst_34850 = cljs.core.seq.call(null,inst_34795);
var state_34863__$1 = (function (){var statearr_34928 = state_34863;
(statearr_34928[(31)] = inst_34849);

return statearr_34928;
})();
if(inst_34850){
var statearr_34929_34990 = state_34863__$1;
(statearr_34929_34990[(1)] = (42));

} else {
var statearr_34930_34991 = state_34863__$1;
(statearr_34930_34991[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (16))){
var inst_34762 = (state_34863[(7)]);
var inst_34764 = cljs.core.chunked_seq_QMARK_.call(null,inst_34762);
var state_34863__$1 = state_34863;
if(inst_34764){
var statearr_34931_34992 = state_34863__$1;
(statearr_34931_34992[(1)] = (19));

} else {
var statearr_34932_34993 = state_34863__$1;
(statearr_34932_34993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (38))){
var inst_34842 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34933_34994 = state_34863__$1;
(statearr_34933_34994[(2)] = inst_34842);

(statearr_34933_34994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (30))){
var state_34863__$1 = state_34863;
var statearr_34934_34995 = state_34863__$1;
(statearr_34934_34995[(2)] = null);

(statearr_34934_34995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (10))){
var inst_34741 = (state_34863[(14)]);
var inst_34743 = (state_34863[(16)]);
var inst_34751 = cljs.core._nth.call(null,inst_34741,inst_34743);
var inst_34752 = cljs.core.nth.call(null,inst_34751,(0),null);
var inst_34753 = cljs.core.nth.call(null,inst_34751,(1),null);
var state_34863__$1 = (function (){var statearr_34935 = state_34863;
(statearr_34935[(26)] = inst_34752);

return statearr_34935;
})();
if(cljs.core.truth_(inst_34753)){
var statearr_34936_34996 = state_34863__$1;
(statearr_34936_34996[(1)] = (13));

} else {
var statearr_34937_34997 = state_34863__$1;
(statearr_34937_34997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (18))){
var inst_34788 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34938_34998 = state_34863__$1;
(statearr_34938_34998[(2)] = inst_34788);

(statearr_34938_34998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (42))){
var state_34863__$1 = state_34863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34863__$1,(45),dchan);
} else {
if((state_val_34864 === (37))){
var inst_34831 = (state_34863[(23)]);
var inst_34731 = (state_34863[(11)]);
var inst_34822 = (state_34863[(25)]);
var inst_34831__$1 = cljs.core.first.call(null,inst_34822);
var inst_34832 = cljs.core.async.put_BANG_.call(null,inst_34831__$1,inst_34731,done);
var state_34863__$1 = (function (){var statearr_34939 = state_34863;
(statearr_34939[(23)] = inst_34831__$1);

return statearr_34939;
})();
if(cljs.core.truth_(inst_34832)){
var statearr_34940_34999 = state_34863__$1;
(statearr_34940_34999[(1)] = (39));

} else {
var statearr_34941_35000 = state_34863__$1;
(statearr_34941_35000[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (8))){
var inst_34742 = (state_34863[(15)]);
var inst_34743 = (state_34863[(16)]);
var inst_34745 = (inst_34743 < inst_34742);
var inst_34746 = inst_34745;
var state_34863__$1 = state_34863;
if(cljs.core.truth_(inst_34746)){
var statearr_34942_35001 = state_34863__$1;
(statearr_34942_35001[(1)] = (10));

} else {
var statearr_34943_35002 = state_34863__$1;
(statearr_34943_35002[(1)] = (11));

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
});})(c__34129__auto___34948,cs,m,dchan,dctr,done))
;
return ((function (switch__34039__auto__,c__34129__auto___34948,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34040__auto__ = null;
var cljs$core$async$mult_$_state_machine__34040__auto____0 = (function (){
var statearr_34944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34944[(0)] = cljs$core$async$mult_$_state_machine__34040__auto__);

(statearr_34944[(1)] = (1));

return statearr_34944;
});
var cljs$core$async$mult_$_state_machine__34040__auto____1 = (function (state_34863){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_34863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e34945){if((e34945 instanceof Object)){
var ex__34043__auto__ = e34945;
var statearr_34946_35003 = state_34863;
(statearr_34946_35003[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_34863;
state_34863 = G__35004;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34040__auto__ = function(state_34863){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34040__auto____1.call(this,state_34863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34040__auto____0;
cljs$core$async$mult_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34040__auto____1;
return cljs$core$async$mult_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___34948,cs,m,dchan,dctr,done))
})();
var state__34131__auto__ = (function (){var statearr_34947 = f__34130__auto__.call(null);
(statearr_34947[(6)] = c__34129__auto___34948);

return statearr_34947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___34948,cs,m,dchan,dctr,done))
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
var G__35006 = arguments.length;
switch (G__35006) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m,ch);
} else {
var m__30856__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m,ch);
} else {
var m__30856__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m);
} else {
var m__30856__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m,state_map);
} else {
var m__30856__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30855__auto__ = (((m == null))?null:m);
var m__30856__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,m,mode);
} else {
var m__30856__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31408__auto__ = [];
var len__31401__auto___35018 = arguments.length;
var i__31402__auto___35019 = (0);
while(true){
if((i__31402__auto___35019 < len__31401__auto___35018)){
args__31408__auto__.push((arguments[i__31402__auto___35019]));

var G__35020 = (i__31402__auto___35019 + (1));
i__31402__auto___35019 = G__35020;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((3) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31409__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35012){
var map__35013 = p__35012;
var map__35013__$1 = ((((!((map__35013 == null)))?((((map__35013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35013):map__35013);
var opts = map__35013__$1;
var statearr_35015_35021 = state;
(statearr_35015_35021[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35013,map__35013__$1,opts){
return (function (val){
var statearr_35016_35022 = state;
(statearr_35016_35022[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35013,map__35013__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35017_35023 = state;
(statearr_35017_35023[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35008){
var G__35009 = cljs.core.first.call(null,seq35008);
var seq35008__$1 = cljs.core.next.call(null,seq35008);
var G__35010 = cljs.core.first.call(null,seq35008__$1);
var seq35008__$2 = cljs.core.next.call(null,seq35008__$1);
var G__35011 = cljs.core.first.call(null,seq35008__$2);
var seq35008__$3 = cljs.core.next.call(null,seq35008__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35009,G__35010,G__35011,seq35008__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35024 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35025){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35025 = meta35025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35026,meta35025__$1){
var self__ = this;
var _35026__$1 = this;
return (new cljs.core.async.t_cljs$core$async35024(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35026){
var self__ = this;
var _35026__$1 = this;
return self__.meta35025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35024.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35025","meta35025",828276089,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35024";

cljs.core.async.t_cljs$core$async35024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async35024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35024(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35025){
return (new cljs.core.async.t_cljs$core$async35024(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35024(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34129__auto___35188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35128){
var state_val_35129 = (state_35128[(1)]);
if((state_val_35129 === (7))){
var inst_35043 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35130_35189 = state_35128__$1;
(statearr_35130_35189[(2)] = inst_35043);

(statearr_35130_35189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (20))){
var inst_35055 = (state_35128[(7)]);
var state_35128__$1 = state_35128;
var statearr_35131_35190 = state_35128__$1;
(statearr_35131_35190[(2)] = inst_35055);

(statearr_35131_35190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (27))){
var state_35128__$1 = state_35128;
var statearr_35132_35191 = state_35128__$1;
(statearr_35132_35191[(2)] = null);

(statearr_35132_35191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (1))){
var inst_35030 = (state_35128[(8)]);
var inst_35030__$1 = calc_state.call(null);
var inst_35032 = (inst_35030__$1 == null);
var inst_35033 = cljs.core.not.call(null,inst_35032);
var state_35128__$1 = (function (){var statearr_35133 = state_35128;
(statearr_35133[(8)] = inst_35030__$1);

return statearr_35133;
})();
if(inst_35033){
var statearr_35134_35192 = state_35128__$1;
(statearr_35134_35192[(1)] = (2));

} else {
var statearr_35135_35193 = state_35128__$1;
(statearr_35135_35193[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (24))){
var inst_35102 = (state_35128[(9)]);
var inst_35079 = (state_35128[(10)]);
var inst_35088 = (state_35128[(11)]);
var inst_35102__$1 = inst_35079.call(null,inst_35088);
var state_35128__$1 = (function (){var statearr_35136 = state_35128;
(statearr_35136[(9)] = inst_35102__$1);

return statearr_35136;
})();
if(cljs.core.truth_(inst_35102__$1)){
var statearr_35137_35194 = state_35128__$1;
(statearr_35137_35194[(1)] = (29));

} else {
var statearr_35138_35195 = state_35128__$1;
(statearr_35138_35195[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (4))){
var inst_35046 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35046)){
var statearr_35139_35196 = state_35128__$1;
(statearr_35139_35196[(1)] = (8));

} else {
var statearr_35140_35197 = state_35128__$1;
(statearr_35140_35197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (15))){
var inst_35073 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35073)){
var statearr_35141_35198 = state_35128__$1;
(statearr_35141_35198[(1)] = (19));

} else {
var statearr_35142_35199 = state_35128__$1;
(statearr_35142_35199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (21))){
var inst_35078 = (state_35128[(12)]);
var inst_35078__$1 = (state_35128[(2)]);
var inst_35079 = cljs.core.get.call(null,inst_35078__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35080 = cljs.core.get.call(null,inst_35078__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35081 = cljs.core.get.call(null,inst_35078__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35128__$1 = (function (){var statearr_35143 = state_35128;
(statearr_35143[(13)] = inst_35080);

(statearr_35143[(10)] = inst_35079);

(statearr_35143[(12)] = inst_35078__$1);

return statearr_35143;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35128__$1,(22),inst_35081);
} else {
if((state_val_35129 === (31))){
var inst_35110 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35110)){
var statearr_35144_35200 = state_35128__$1;
(statearr_35144_35200[(1)] = (32));

} else {
var statearr_35145_35201 = state_35128__$1;
(statearr_35145_35201[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (32))){
var inst_35087 = (state_35128[(14)]);
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35128__$1,(35),out,inst_35087);
} else {
if((state_val_35129 === (33))){
var inst_35078 = (state_35128[(12)]);
var inst_35055 = inst_35078;
var state_35128__$1 = (function (){var statearr_35146 = state_35128;
(statearr_35146[(7)] = inst_35055);

return statearr_35146;
})();
var statearr_35147_35202 = state_35128__$1;
(statearr_35147_35202[(2)] = null);

(statearr_35147_35202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (13))){
var inst_35055 = (state_35128[(7)]);
var inst_35062 = inst_35055.cljs$lang$protocol_mask$partition0$;
var inst_35063 = (inst_35062 & (64));
var inst_35064 = inst_35055.cljs$core$ISeq$;
var inst_35065 = (cljs.core.PROTOCOL_SENTINEL === inst_35064);
var inst_35066 = (inst_35063) || (inst_35065);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35066)){
var statearr_35148_35203 = state_35128__$1;
(statearr_35148_35203[(1)] = (16));

} else {
var statearr_35149_35204 = state_35128__$1;
(statearr_35149_35204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (22))){
var inst_35088 = (state_35128[(11)]);
var inst_35087 = (state_35128[(14)]);
var inst_35086 = (state_35128[(2)]);
var inst_35087__$1 = cljs.core.nth.call(null,inst_35086,(0),null);
var inst_35088__$1 = cljs.core.nth.call(null,inst_35086,(1),null);
var inst_35089 = (inst_35087__$1 == null);
var inst_35090 = cljs.core._EQ_.call(null,inst_35088__$1,change);
var inst_35091 = (inst_35089) || (inst_35090);
var state_35128__$1 = (function (){var statearr_35150 = state_35128;
(statearr_35150[(11)] = inst_35088__$1);

(statearr_35150[(14)] = inst_35087__$1);

return statearr_35150;
})();
if(cljs.core.truth_(inst_35091)){
var statearr_35151_35205 = state_35128__$1;
(statearr_35151_35205[(1)] = (23));

} else {
var statearr_35152_35206 = state_35128__$1;
(statearr_35152_35206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (36))){
var inst_35078 = (state_35128[(12)]);
var inst_35055 = inst_35078;
var state_35128__$1 = (function (){var statearr_35153 = state_35128;
(statearr_35153[(7)] = inst_35055);

return statearr_35153;
})();
var statearr_35154_35207 = state_35128__$1;
(statearr_35154_35207[(2)] = null);

(statearr_35154_35207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (29))){
var inst_35102 = (state_35128[(9)]);
var state_35128__$1 = state_35128;
var statearr_35155_35208 = state_35128__$1;
(statearr_35155_35208[(2)] = inst_35102);

(statearr_35155_35208[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (6))){
var state_35128__$1 = state_35128;
var statearr_35156_35209 = state_35128__$1;
(statearr_35156_35209[(2)] = false);

(statearr_35156_35209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (28))){
var inst_35098 = (state_35128[(2)]);
var inst_35099 = calc_state.call(null);
var inst_35055 = inst_35099;
var state_35128__$1 = (function (){var statearr_35157 = state_35128;
(statearr_35157[(7)] = inst_35055);

(statearr_35157[(15)] = inst_35098);

return statearr_35157;
})();
var statearr_35158_35210 = state_35128__$1;
(statearr_35158_35210[(2)] = null);

(statearr_35158_35210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (25))){
var inst_35124 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35159_35211 = state_35128__$1;
(statearr_35159_35211[(2)] = inst_35124);

(statearr_35159_35211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (34))){
var inst_35122 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35160_35212 = state_35128__$1;
(statearr_35160_35212[(2)] = inst_35122);

(statearr_35160_35212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (17))){
var state_35128__$1 = state_35128;
var statearr_35161_35213 = state_35128__$1;
(statearr_35161_35213[(2)] = false);

(statearr_35161_35213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (3))){
var state_35128__$1 = state_35128;
var statearr_35162_35214 = state_35128__$1;
(statearr_35162_35214[(2)] = false);

(statearr_35162_35214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (12))){
var inst_35126 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35128__$1,inst_35126);
} else {
if((state_val_35129 === (2))){
var inst_35030 = (state_35128[(8)]);
var inst_35035 = inst_35030.cljs$lang$protocol_mask$partition0$;
var inst_35036 = (inst_35035 & (64));
var inst_35037 = inst_35030.cljs$core$ISeq$;
var inst_35038 = (cljs.core.PROTOCOL_SENTINEL === inst_35037);
var inst_35039 = (inst_35036) || (inst_35038);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35039)){
var statearr_35163_35215 = state_35128__$1;
(statearr_35163_35215[(1)] = (5));

} else {
var statearr_35164_35216 = state_35128__$1;
(statearr_35164_35216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (23))){
var inst_35087 = (state_35128[(14)]);
var inst_35093 = (inst_35087 == null);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35093)){
var statearr_35165_35217 = state_35128__$1;
(statearr_35165_35217[(1)] = (26));

} else {
var statearr_35166_35218 = state_35128__$1;
(statearr_35166_35218[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (35))){
var inst_35113 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35113)){
var statearr_35167_35219 = state_35128__$1;
(statearr_35167_35219[(1)] = (36));

} else {
var statearr_35168_35220 = state_35128__$1;
(statearr_35168_35220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (19))){
var inst_35055 = (state_35128[(7)]);
var inst_35075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35055);
var state_35128__$1 = state_35128;
var statearr_35169_35221 = state_35128__$1;
(statearr_35169_35221[(2)] = inst_35075);

(statearr_35169_35221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (11))){
var inst_35055 = (state_35128[(7)]);
var inst_35059 = (inst_35055 == null);
var inst_35060 = cljs.core.not.call(null,inst_35059);
var state_35128__$1 = state_35128;
if(inst_35060){
var statearr_35170_35222 = state_35128__$1;
(statearr_35170_35222[(1)] = (13));

} else {
var statearr_35171_35223 = state_35128__$1;
(statearr_35171_35223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (9))){
var inst_35030 = (state_35128[(8)]);
var state_35128__$1 = state_35128;
var statearr_35172_35224 = state_35128__$1;
(statearr_35172_35224[(2)] = inst_35030);

(statearr_35172_35224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (5))){
var state_35128__$1 = state_35128;
var statearr_35173_35225 = state_35128__$1;
(statearr_35173_35225[(2)] = true);

(statearr_35173_35225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (14))){
var state_35128__$1 = state_35128;
var statearr_35174_35226 = state_35128__$1;
(statearr_35174_35226[(2)] = false);

(statearr_35174_35226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (26))){
var inst_35088 = (state_35128[(11)]);
var inst_35095 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35088);
var state_35128__$1 = state_35128;
var statearr_35175_35227 = state_35128__$1;
(statearr_35175_35227[(2)] = inst_35095);

(statearr_35175_35227[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (16))){
var state_35128__$1 = state_35128;
var statearr_35176_35228 = state_35128__$1;
(statearr_35176_35228[(2)] = true);

(statearr_35176_35228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (38))){
var inst_35118 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35177_35229 = state_35128__$1;
(statearr_35177_35229[(2)] = inst_35118);

(statearr_35177_35229[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (30))){
var inst_35080 = (state_35128[(13)]);
var inst_35079 = (state_35128[(10)]);
var inst_35088 = (state_35128[(11)]);
var inst_35105 = cljs.core.empty_QMARK_.call(null,inst_35079);
var inst_35106 = inst_35080.call(null,inst_35088);
var inst_35107 = cljs.core.not.call(null,inst_35106);
var inst_35108 = (inst_35105) && (inst_35107);
var state_35128__$1 = state_35128;
var statearr_35178_35230 = state_35128__$1;
(statearr_35178_35230[(2)] = inst_35108);

(statearr_35178_35230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (10))){
var inst_35030 = (state_35128[(8)]);
var inst_35051 = (state_35128[(2)]);
var inst_35052 = cljs.core.get.call(null,inst_35051,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35053 = cljs.core.get.call(null,inst_35051,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35054 = cljs.core.get.call(null,inst_35051,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35055 = inst_35030;
var state_35128__$1 = (function (){var statearr_35179 = state_35128;
(statearr_35179[(16)] = inst_35054);

(statearr_35179[(17)] = inst_35052);

(statearr_35179[(7)] = inst_35055);

(statearr_35179[(18)] = inst_35053);

return statearr_35179;
})();
var statearr_35180_35231 = state_35128__$1;
(statearr_35180_35231[(2)] = null);

(statearr_35180_35231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (18))){
var inst_35070 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35181_35232 = state_35128__$1;
(statearr_35181_35232[(2)] = inst_35070);

(statearr_35181_35232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (37))){
var state_35128__$1 = state_35128;
var statearr_35182_35233 = state_35128__$1;
(statearr_35182_35233[(2)] = null);

(statearr_35182_35233[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (8))){
var inst_35030 = (state_35128[(8)]);
var inst_35048 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35030);
var state_35128__$1 = state_35128;
var statearr_35183_35234 = state_35128__$1;
(statearr_35183_35234[(2)] = inst_35048);

(statearr_35183_35234[(1)] = (10));


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
});})(c__34129__auto___35188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34039__auto__,c__34129__auto___35188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34040__auto__ = null;
var cljs$core$async$mix_$_state_machine__34040__auto____0 = (function (){
var statearr_35184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35184[(0)] = cljs$core$async$mix_$_state_machine__34040__auto__);

(statearr_35184[(1)] = (1));

return statearr_35184;
});
var cljs$core$async$mix_$_state_machine__34040__auto____1 = (function (state_35128){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35185){if((e35185 instanceof Object)){
var ex__34043__auto__ = e35185;
var statearr_35186_35235 = state_35128;
(statearr_35186_35235[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35236 = state_35128;
state_35128 = G__35236;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34040__auto__ = function(state_35128){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34040__auto____1.call(this,state_35128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34040__auto____0;
cljs$core$async$mix_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34040__auto____1;
return cljs$core$async$mix_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34131__auto__ = (function (){var statearr_35187 = f__34130__auto__.call(null);
(statearr_35187[(6)] = c__34129__auto___35188);

return statearr_35187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30855__auto__ = (((p == null))?null:p);
var m__30856__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30856__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30855__auto__ = (((p == null))?null:p);
var m__30856__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,p,v,ch);
} else {
var m__30856__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35238 = arguments.length;
switch (G__35238) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30855__auto__ = (((p == null))?null:p);
var m__30856__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,p);
} else {
var m__30856__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30855__auto__ = (((p == null))?null:p);
var m__30856__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30855__auto__)]);
if(!((m__30856__auto__ == null))){
return m__30856__auto__.call(null,p,v);
} else {
var m__30856__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30856__auto____$1 == null))){
return m__30856__auto____$1.call(null,p,v);
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
var G__35242 = arguments.length;
switch (G__35242) {
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
var or__30122__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30122__auto__,mults){
return (function (p1__35240_SHARP_){
if(cljs.core.truth_(p1__35240_SHARP_.call(null,topic))){
return p1__35240_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35240_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30122__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35243 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35244){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35244 = meta35244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35245,meta35244__$1){
var self__ = this;
var _35245__$1 = this;
return (new cljs.core.async.t_cljs$core$async35243(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35244__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35245){
var self__ = this;
var _35245__$1 = this;
return self__.meta35244;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35244","meta35244",44631038,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35243";

cljs.core.async.t_cljs$core$async35243.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async35243");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35243 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35243(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35244){
return (new cljs.core.async.t_cljs$core$async35243(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35244));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35243(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34129__auto___35363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35363,mults,ensure_mult,p){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35363,mults,ensure_mult,p){
return (function (state_35317){
var state_val_35318 = (state_35317[(1)]);
if((state_val_35318 === (7))){
var inst_35313 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35319_35364 = state_35317__$1;
(statearr_35319_35364[(2)] = inst_35313);

(statearr_35319_35364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (20))){
var state_35317__$1 = state_35317;
var statearr_35320_35365 = state_35317__$1;
(statearr_35320_35365[(2)] = null);

(statearr_35320_35365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (1))){
var state_35317__$1 = state_35317;
var statearr_35321_35366 = state_35317__$1;
(statearr_35321_35366[(2)] = null);

(statearr_35321_35366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (24))){
var inst_35296 = (state_35317[(7)]);
var inst_35305 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35296);
var state_35317__$1 = state_35317;
var statearr_35322_35367 = state_35317__$1;
(statearr_35322_35367[(2)] = inst_35305);

(statearr_35322_35367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (4))){
var inst_35248 = (state_35317[(8)]);
var inst_35248__$1 = (state_35317[(2)]);
var inst_35249 = (inst_35248__$1 == null);
var state_35317__$1 = (function (){var statearr_35323 = state_35317;
(statearr_35323[(8)] = inst_35248__$1);

return statearr_35323;
})();
if(cljs.core.truth_(inst_35249)){
var statearr_35324_35368 = state_35317__$1;
(statearr_35324_35368[(1)] = (5));

} else {
var statearr_35325_35369 = state_35317__$1;
(statearr_35325_35369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (15))){
var inst_35290 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35326_35370 = state_35317__$1;
(statearr_35326_35370[(2)] = inst_35290);

(statearr_35326_35370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (21))){
var inst_35310 = (state_35317[(2)]);
var state_35317__$1 = (function (){var statearr_35327 = state_35317;
(statearr_35327[(9)] = inst_35310);

return statearr_35327;
})();
var statearr_35328_35371 = state_35317__$1;
(statearr_35328_35371[(2)] = null);

(statearr_35328_35371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (13))){
var inst_35272 = (state_35317[(10)]);
var inst_35274 = cljs.core.chunked_seq_QMARK_.call(null,inst_35272);
var state_35317__$1 = state_35317;
if(inst_35274){
var statearr_35329_35372 = state_35317__$1;
(statearr_35329_35372[(1)] = (16));

} else {
var statearr_35330_35373 = state_35317__$1;
(statearr_35330_35373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (22))){
var inst_35302 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
if(cljs.core.truth_(inst_35302)){
var statearr_35331_35374 = state_35317__$1;
(statearr_35331_35374[(1)] = (23));

} else {
var statearr_35332_35375 = state_35317__$1;
(statearr_35332_35375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (6))){
var inst_35296 = (state_35317[(7)]);
var inst_35298 = (state_35317[(11)]);
var inst_35248 = (state_35317[(8)]);
var inst_35296__$1 = topic_fn.call(null,inst_35248);
var inst_35297 = cljs.core.deref.call(null,mults);
var inst_35298__$1 = cljs.core.get.call(null,inst_35297,inst_35296__$1);
var state_35317__$1 = (function (){var statearr_35333 = state_35317;
(statearr_35333[(7)] = inst_35296__$1);

(statearr_35333[(11)] = inst_35298__$1);

return statearr_35333;
})();
if(cljs.core.truth_(inst_35298__$1)){
var statearr_35334_35376 = state_35317__$1;
(statearr_35334_35376[(1)] = (19));

} else {
var statearr_35335_35377 = state_35317__$1;
(statearr_35335_35377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (25))){
var inst_35307 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35336_35378 = state_35317__$1;
(statearr_35336_35378[(2)] = inst_35307);

(statearr_35336_35378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (17))){
var inst_35272 = (state_35317[(10)]);
var inst_35281 = cljs.core.first.call(null,inst_35272);
var inst_35282 = cljs.core.async.muxch_STAR_.call(null,inst_35281);
var inst_35283 = cljs.core.async.close_BANG_.call(null,inst_35282);
var inst_35284 = cljs.core.next.call(null,inst_35272);
var inst_35258 = inst_35284;
var inst_35259 = null;
var inst_35260 = (0);
var inst_35261 = (0);
var state_35317__$1 = (function (){var statearr_35337 = state_35317;
(statearr_35337[(12)] = inst_35261);

(statearr_35337[(13)] = inst_35260);

(statearr_35337[(14)] = inst_35259);

(statearr_35337[(15)] = inst_35283);

(statearr_35337[(16)] = inst_35258);

return statearr_35337;
})();
var statearr_35338_35379 = state_35317__$1;
(statearr_35338_35379[(2)] = null);

(statearr_35338_35379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (3))){
var inst_35315 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35317__$1,inst_35315);
} else {
if((state_val_35318 === (12))){
var inst_35292 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35339_35380 = state_35317__$1;
(statearr_35339_35380[(2)] = inst_35292);

(statearr_35339_35380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (2))){
var state_35317__$1 = state_35317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35317__$1,(4),ch);
} else {
if((state_val_35318 === (23))){
var state_35317__$1 = state_35317;
var statearr_35340_35381 = state_35317__$1;
(statearr_35340_35381[(2)] = null);

(statearr_35340_35381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (19))){
var inst_35298 = (state_35317[(11)]);
var inst_35248 = (state_35317[(8)]);
var inst_35300 = cljs.core.async.muxch_STAR_.call(null,inst_35298);
var state_35317__$1 = state_35317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35317__$1,(22),inst_35300,inst_35248);
} else {
if((state_val_35318 === (11))){
var inst_35258 = (state_35317[(16)]);
var inst_35272 = (state_35317[(10)]);
var inst_35272__$1 = cljs.core.seq.call(null,inst_35258);
var state_35317__$1 = (function (){var statearr_35341 = state_35317;
(statearr_35341[(10)] = inst_35272__$1);

return statearr_35341;
})();
if(inst_35272__$1){
var statearr_35342_35382 = state_35317__$1;
(statearr_35342_35382[(1)] = (13));

} else {
var statearr_35343_35383 = state_35317__$1;
(statearr_35343_35383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (9))){
var inst_35294 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35344_35384 = state_35317__$1;
(statearr_35344_35384[(2)] = inst_35294);

(statearr_35344_35384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (5))){
var inst_35255 = cljs.core.deref.call(null,mults);
var inst_35256 = cljs.core.vals.call(null,inst_35255);
var inst_35257 = cljs.core.seq.call(null,inst_35256);
var inst_35258 = inst_35257;
var inst_35259 = null;
var inst_35260 = (0);
var inst_35261 = (0);
var state_35317__$1 = (function (){var statearr_35345 = state_35317;
(statearr_35345[(12)] = inst_35261);

(statearr_35345[(13)] = inst_35260);

(statearr_35345[(14)] = inst_35259);

(statearr_35345[(16)] = inst_35258);

return statearr_35345;
})();
var statearr_35346_35385 = state_35317__$1;
(statearr_35346_35385[(2)] = null);

(statearr_35346_35385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (14))){
var state_35317__$1 = state_35317;
var statearr_35350_35386 = state_35317__$1;
(statearr_35350_35386[(2)] = null);

(statearr_35350_35386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (16))){
var inst_35272 = (state_35317[(10)]);
var inst_35276 = cljs.core.chunk_first.call(null,inst_35272);
var inst_35277 = cljs.core.chunk_rest.call(null,inst_35272);
var inst_35278 = cljs.core.count.call(null,inst_35276);
var inst_35258 = inst_35277;
var inst_35259 = inst_35276;
var inst_35260 = inst_35278;
var inst_35261 = (0);
var state_35317__$1 = (function (){var statearr_35351 = state_35317;
(statearr_35351[(12)] = inst_35261);

(statearr_35351[(13)] = inst_35260);

(statearr_35351[(14)] = inst_35259);

(statearr_35351[(16)] = inst_35258);

return statearr_35351;
})();
var statearr_35352_35387 = state_35317__$1;
(statearr_35352_35387[(2)] = null);

(statearr_35352_35387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (10))){
var inst_35261 = (state_35317[(12)]);
var inst_35260 = (state_35317[(13)]);
var inst_35259 = (state_35317[(14)]);
var inst_35258 = (state_35317[(16)]);
var inst_35266 = cljs.core._nth.call(null,inst_35259,inst_35261);
var inst_35267 = cljs.core.async.muxch_STAR_.call(null,inst_35266);
var inst_35268 = cljs.core.async.close_BANG_.call(null,inst_35267);
var inst_35269 = (inst_35261 + (1));
var tmp35347 = inst_35260;
var tmp35348 = inst_35259;
var tmp35349 = inst_35258;
var inst_35258__$1 = tmp35349;
var inst_35259__$1 = tmp35348;
var inst_35260__$1 = tmp35347;
var inst_35261__$1 = inst_35269;
var state_35317__$1 = (function (){var statearr_35353 = state_35317;
(statearr_35353[(12)] = inst_35261__$1);

(statearr_35353[(17)] = inst_35268);

(statearr_35353[(13)] = inst_35260__$1);

(statearr_35353[(14)] = inst_35259__$1);

(statearr_35353[(16)] = inst_35258__$1);

return statearr_35353;
})();
var statearr_35354_35388 = state_35317__$1;
(statearr_35354_35388[(2)] = null);

(statearr_35354_35388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (18))){
var inst_35287 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35355_35389 = state_35317__$1;
(statearr_35355_35389[(2)] = inst_35287);

(statearr_35355_35389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (8))){
var inst_35261 = (state_35317[(12)]);
var inst_35260 = (state_35317[(13)]);
var inst_35263 = (inst_35261 < inst_35260);
var inst_35264 = inst_35263;
var state_35317__$1 = state_35317;
if(cljs.core.truth_(inst_35264)){
var statearr_35356_35390 = state_35317__$1;
(statearr_35356_35390[(1)] = (10));

} else {
var statearr_35357_35391 = state_35317__$1;
(statearr_35357_35391[(1)] = (11));

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
});})(c__34129__auto___35363,mults,ensure_mult,p))
;
return ((function (switch__34039__auto__,c__34129__auto___35363,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35358[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35358[(1)] = (1));

return statearr_35358;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35317){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35359){if((e35359 instanceof Object)){
var ex__34043__auto__ = e35359;
var statearr_35360_35392 = state_35317;
(statearr_35360_35392[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35393 = state_35317;
state_35317 = G__35393;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35363,mults,ensure_mult,p))
})();
var state__34131__auto__ = (function (){var statearr_35361 = f__34130__auto__.call(null);
(statearr_35361[(6)] = c__34129__auto___35363);

return statearr_35361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35363,mults,ensure_mult,p))
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
var G__35395 = arguments.length;
switch (G__35395) {
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
var G__35398 = arguments.length;
switch (G__35398) {
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
var G__35401 = arguments.length;
switch (G__35401) {
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
var c__34129__auto___35468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35440){
var state_val_35441 = (state_35440[(1)]);
if((state_val_35441 === (7))){
var state_35440__$1 = state_35440;
var statearr_35442_35469 = state_35440__$1;
(statearr_35442_35469[(2)] = null);

(statearr_35442_35469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (1))){
var state_35440__$1 = state_35440;
var statearr_35443_35470 = state_35440__$1;
(statearr_35443_35470[(2)] = null);

(statearr_35443_35470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (4))){
var inst_35404 = (state_35440[(7)]);
var inst_35406 = (inst_35404 < cnt);
var state_35440__$1 = state_35440;
if(cljs.core.truth_(inst_35406)){
var statearr_35444_35471 = state_35440__$1;
(statearr_35444_35471[(1)] = (6));

} else {
var statearr_35445_35472 = state_35440__$1;
(statearr_35445_35472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (15))){
var inst_35436 = (state_35440[(2)]);
var state_35440__$1 = state_35440;
var statearr_35446_35473 = state_35440__$1;
(statearr_35446_35473[(2)] = inst_35436);

(statearr_35446_35473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (13))){
var inst_35429 = cljs.core.async.close_BANG_.call(null,out);
var state_35440__$1 = state_35440;
var statearr_35447_35474 = state_35440__$1;
(statearr_35447_35474[(2)] = inst_35429);

(statearr_35447_35474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (6))){
var state_35440__$1 = state_35440;
var statearr_35448_35475 = state_35440__$1;
(statearr_35448_35475[(2)] = null);

(statearr_35448_35475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (3))){
var inst_35438 = (state_35440[(2)]);
var state_35440__$1 = state_35440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35440__$1,inst_35438);
} else {
if((state_val_35441 === (12))){
var inst_35426 = (state_35440[(8)]);
var inst_35426__$1 = (state_35440[(2)]);
var inst_35427 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35426__$1);
var state_35440__$1 = (function (){var statearr_35449 = state_35440;
(statearr_35449[(8)] = inst_35426__$1);

return statearr_35449;
})();
if(cljs.core.truth_(inst_35427)){
var statearr_35450_35476 = state_35440__$1;
(statearr_35450_35476[(1)] = (13));

} else {
var statearr_35451_35477 = state_35440__$1;
(statearr_35451_35477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (2))){
var inst_35403 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35404 = (0);
var state_35440__$1 = (function (){var statearr_35452 = state_35440;
(statearr_35452[(9)] = inst_35403);

(statearr_35452[(7)] = inst_35404);

return statearr_35452;
})();
var statearr_35453_35478 = state_35440__$1;
(statearr_35453_35478[(2)] = null);

(statearr_35453_35478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (11))){
var inst_35404 = (state_35440[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35440,(10),Object,null,(9));
var inst_35413 = chs__$1.call(null,inst_35404);
var inst_35414 = done.call(null,inst_35404);
var inst_35415 = cljs.core.async.take_BANG_.call(null,inst_35413,inst_35414);
var state_35440__$1 = state_35440;
var statearr_35454_35479 = state_35440__$1;
(statearr_35454_35479[(2)] = inst_35415);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (9))){
var inst_35404 = (state_35440[(7)]);
var inst_35417 = (state_35440[(2)]);
var inst_35418 = (inst_35404 + (1));
var inst_35404__$1 = inst_35418;
var state_35440__$1 = (function (){var statearr_35455 = state_35440;
(statearr_35455[(7)] = inst_35404__$1);

(statearr_35455[(10)] = inst_35417);

return statearr_35455;
})();
var statearr_35456_35480 = state_35440__$1;
(statearr_35456_35480[(2)] = null);

(statearr_35456_35480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (5))){
var inst_35424 = (state_35440[(2)]);
var state_35440__$1 = (function (){var statearr_35457 = state_35440;
(statearr_35457[(11)] = inst_35424);

return statearr_35457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35440__$1,(12),dchan);
} else {
if((state_val_35441 === (14))){
var inst_35426 = (state_35440[(8)]);
var inst_35431 = cljs.core.apply.call(null,f,inst_35426);
var state_35440__$1 = state_35440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35440__$1,(16),out,inst_35431);
} else {
if((state_val_35441 === (16))){
var inst_35433 = (state_35440[(2)]);
var state_35440__$1 = (function (){var statearr_35458 = state_35440;
(statearr_35458[(12)] = inst_35433);

return statearr_35458;
})();
var statearr_35459_35481 = state_35440__$1;
(statearr_35459_35481[(2)] = null);

(statearr_35459_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (10))){
var inst_35408 = (state_35440[(2)]);
var inst_35409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35440__$1 = (function (){var statearr_35460 = state_35440;
(statearr_35460[(13)] = inst_35408);

return statearr_35460;
})();
var statearr_35461_35482 = state_35440__$1;
(statearr_35461_35482[(2)] = inst_35409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35441 === (8))){
var inst_35422 = (state_35440[(2)]);
var state_35440__$1 = state_35440;
var statearr_35462_35483 = state_35440__$1;
(statearr_35462_35483[(2)] = inst_35422);

(statearr_35462_35483[(1)] = (5));


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
});})(c__34129__auto___35468,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34039__auto__,c__34129__auto___35468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35463[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35463[(1)] = (1));

return statearr_35463;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35440){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35464){if((e35464 instanceof Object)){
var ex__34043__auto__ = e35464;
var statearr_35465_35484 = state_35440;
(statearr_35465_35484[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35485 = state_35440;
state_35440 = G__35485;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35468,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34131__auto__ = (function (){var statearr_35466 = f__34130__auto__.call(null);
(statearr_35466[(6)] = c__34129__auto___35468);

return statearr_35466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35468,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35488 = arguments.length;
switch (G__35488) {
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
var c__34129__auto___35542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35542,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35542,out){
return (function (state_35520){
var state_val_35521 = (state_35520[(1)]);
if((state_val_35521 === (7))){
var inst_35500 = (state_35520[(7)]);
var inst_35499 = (state_35520[(8)]);
var inst_35499__$1 = (state_35520[(2)]);
var inst_35500__$1 = cljs.core.nth.call(null,inst_35499__$1,(0),null);
var inst_35501 = cljs.core.nth.call(null,inst_35499__$1,(1),null);
var inst_35502 = (inst_35500__$1 == null);
var state_35520__$1 = (function (){var statearr_35522 = state_35520;
(statearr_35522[(7)] = inst_35500__$1);

(statearr_35522[(9)] = inst_35501);

(statearr_35522[(8)] = inst_35499__$1);

return statearr_35522;
})();
if(cljs.core.truth_(inst_35502)){
var statearr_35523_35543 = state_35520__$1;
(statearr_35523_35543[(1)] = (8));

} else {
var statearr_35524_35544 = state_35520__$1;
(statearr_35524_35544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (1))){
var inst_35489 = cljs.core.vec.call(null,chs);
var inst_35490 = inst_35489;
var state_35520__$1 = (function (){var statearr_35525 = state_35520;
(statearr_35525[(10)] = inst_35490);

return statearr_35525;
})();
var statearr_35526_35545 = state_35520__$1;
(statearr_35526_35545[(2)] = null);

(statearr_35526_35545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (4))){
var inst_35490 = (state_35520[(10)]);
var state_35520__$1 = state_35520;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35520__$1,(7),inst_35490);
} else {
if((state_val_35521 === (6))){
var inst_35516 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
var statearr_35527_35546 = state_35520__$1;
(statearr_35527_35546[(2)] = inst_35516);

(statearr_35527_35546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (3))){
var inst_35518 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35520__$1,inst_35518);
} else {
if((state_val_35521 === (2))){
var inst_35490 = (state_35520[(10)]);
var inst_35492 = cljs.core.count.call(null,inst_35490);
var inst_35493 = (inst_35492 > (0));
var state_35520__$1 = state_35520;
if(cljs.core.truth_(inst_35493)){
var statearr_35529_35547 = state_35520__$1;
(statearr_35529_35547[(1)] = (4));

} else {
var statearr_35530_35548 = state_35520__$1;
(statearr_35530_35548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (11))){
var inst_35490 = (state_35520[(10)]);
var inst_35509 = (state_35520[(2)]);
var tmp35528 = inst_35490;
var inst_35490__$1 = tmp35528;
var state_35520__$1 = (function (){var statearr_35531 = state_35520;
(statearr_35531[(10)] = inst_35490__$1);

(statearr_35531[(11)] = inst_35509);

return statearr_35531;
})();
var statearr_35532_35549 = state_35520__$1;
(statearr_35532_35549[(2)] = null);

(statearr_35532_35549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (9))){
var inst_35500 = (state_35520[(7)]);
var state_35520__$1 = state_35520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35520__$1,(11),out,inst_35500);
} else {
if((state_val_35521 === (5))){
var inst_35514 = cljs.core.async.close_BANG_.call(null,out);
var state_35520__$1 = state_35520;
var statearr_35533_35550 = state_35520__$1;
(statearr_35533_35550[(2)] = inst_35514);

(statearr_35533_35550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (10))){
var inst_35512 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
var statearr_35534_35551 = state_35520__$1;
(statearr_35534_35551[(2)] = inst_35512);

(statearr_35534_35551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (8))){
var inst_35500 = (state_35520[(7)]);
var inst_35490 = (state_35520[(10)]);
var inst_35501 = (state_35520[(9)]);
var inst_35499 = (state_35520[(8)]);
var inst_35504 = (function (){var cs = inst_35490;
var vec__35495 = inst_35499;
var v = inst_35500;
var c = inst_35501;
return ((function (cs,vec__35495,v,c,inst_35500,inst_35490,inst_35501,inst_35499,state_val_35521,c__34129__auto___35542,out){
return (function (p1__35486_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35486_SHARP_);
});
;})(cs,vec__35495,v,c,inst_35500,inst_35490,inst_35501,inst_35499,state_val_35521,c__34129__auto___35542,out))
})();
var inst_35505 = cljs.core.filterv.call(null,inst_35504,inst_35490);
var inst_35490__$1 = inst_35505;
var state_35520__$1 = (function (){var statearr_35535 = state_35520;
(statearr_35535[(10)] = inst_35490__$1);

return statearr_35535;
})();
var statearr_35536_35552 = state_35520__$1;
(statearr_35536_35552[(2)] = null);

(statearr_35536_35552[(1)] = (2));


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
});})(c__34129__auto___35542,out))
;
return ((function (switch__34039__auto__,c__34129__auto___35542,out){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35537[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35537[(1)] = (1));

return statearr_35537;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35520){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35538){if((e35538 instanceof Object)){
var ex__34043__auto__ = e35538;
var statearr_35539_35553 = state_35520;
(statearr_35539_35553[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35554 = state_35520;
state_35520 = G__35554;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35542,out))
})();
var state__34131__auto__ = (function (){var statearr_35540 = f__34130__auto__.call(null);
(statearr_35540[(6)] = c__34129__auto___35542);

return statearr_35540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35542,out))
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
var G__35556 = arguments.length;
switch (G__35556) {
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
var c__34129__auto___35601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35601,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35601,out){
return (function (state_35580){
var state_val_35581 = (state_35580[(1)]);
if((state_val_35581 === (7))){
var inst_35562 = (state_35580[(7)]);
var inst_35562__$1 = (state_35580[(2)]);
var inst_35563 = (inst_35562__$1 == null);
var inst_35564 = cljs.core.not.call(null,inst_35563);
var state_35580__$1 = (function (){var statearr_35582 = state_35580;
(statearr_35582[(7)] = inst_35562__$1);

return statearr_35582;
})();
if(inst_35564){
var statearr_35583_35602 = state_35580__$1;
(statearr_35583_35602[(1)] = (8));

} else {
var statearr_35584_35603 = state_35580__$1;
(statearr_35584_35603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (1))){
var inst_35557 = (0);
var state_35580__$1 = (function (){var statearr_35585 = state_35580;
(statearr_35585[(8)] = inst_35557);

return statearr_35585;
})();
var statearr_35586_35604 = state_35580__$1;
(statearr_35586_35604[(2)] = null);

(statearr_35586_35604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (4))){
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(7),ch);
} else {
if((state_val_35581 === (6))){
var inst_35575 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35587_35605 = state_35580__$1;
(statearr_35587_35605[(2)] = inst_35575);

(statearr_35587_35605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (3))){
var inst_35577 = (state_35580[(2)]);
var inst_35578 = cljs.core.async.close_BANG_.call(null,out);
var state_35580__$1 = (function (){var statearr_35588 = state_35580;
(statearr_35588[(9)] = inst_35577);

return statearr_35588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35580__$1,inst_35578);
} else {
if((state_val_35581 === (2))){
var inst_35557 = (state_35580[(8)]);
var inst_35559 = (inst_35557 < n);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35559)){
var statearr_35589_35606 = state_35580__$1;
(statearr_35589_35606[(1)] = (4));

} else {
var statearr_35590_35607 = state_35580__$1;
(statearr_35590_35607[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (11))){
var inst_35557 = (state_35580[(8)]);
var inst_35567 = (state_35580[(2)]);
var inst_35568 = (inst_35557 + (1));
var inst_35557__$1 = inst_35568;
var state_35580__$1 = (function (){var statearr_35591 = state_35580;
(statearr_35591[(8)] = inst_35557__$1);

(statearr_35591[(10)] = inst_35567);

return statearr_35591;
})();
var statearr_35592_35608 = state_35580__$1;
(statearr_35592_35608[(2)] = null);

(statearr_35592_35608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (9))){
var state_35580__$1 = state_35580;
var statearr_35593_35609 = state_35580__$1;
(statearr_35593_35609[(2)] = null);

(statearr_35593_35609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (5))){
var state_35580__$1 = state_35580;
var statearr_35594_35610 = state_35580__$1;
(statearr_35594_35610[(2)] = null);

(statearr_35594_35610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (10))){
var inst_35572 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35595_35611 = state_35580__$1;
(statearr_35595_35611[(2)] = inst_35572);

(statearr_35595_35611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (8))){
var inst_35562 = (state_35580[(7)]);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35580__$1,(11),out,inst_35562);
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
});})(c__34129__auto___35601,out))
;
return ((function (switch__34039__auto__,c__34129__auto___35601,out){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35596[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35596[(1)] = (1));

return statearr_35596;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35580){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35597){if((e35597 instanceof Object)){
var ex__34043__auto__ = e35597;
var statearr_35598_35612 = state_35580;
(statearr_35598_35612[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35613 = state_35580;
state_35580 = G__35613;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35601,out))
})();
var state__34131__auto__ = (function (){var statearr_35599 = f__34130__auto__.call(null);
(statearr_35599[(6)] = c__34129__auto___35601);

return statearr_35599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35601,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35615 = (function (f,ch,meta35616){
this.f = f;
this.ch = ch;
this.meta35616 = meta35616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35617,meta35616__$1){
var self__ = this;
var _35617__$1 = this;
return (new cljs.core.async.t_cljs$core$async35615(self__.f,self__.ch,meta35616__$1));
});

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35617){
var self__ = this;
var _35617__$1 = this;
return self__.meta35616;
});

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35618 = (function (f,ch,meta35616,_,fn1,meta35619){
this.f = f;
this.ch = ch;
this.meta35616 = meta35616;
this._ = _;
this.fn1 = fn1;
this.meta35619 = meta35619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35620,meta35619__$1){
var self__ = this;
var _35620__$1 = this;
return (new cljs.core.async.t_cljs$core$async35618(self__.f,self__.ch,self__.meta35616,self__._,self__.fn1,meta35619__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35620){
var self__ = this;
var _35620__$1 = this;
return self__.meta35619;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35614_SHARP_){
return f1.call(null,(((p1__35614_SHARP_ == null))?null:self__.f.call(null,p1__35614_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35618.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35616","meta35616",774516613,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35615","cljs.core.async/t_cljs$core$async35615",-165922297,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35619","meta35619",-157800948,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35618";

cljs.core.async.t_cljs$core$async35618.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async35618");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35618 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35618(f__$1,ch__$1,meta35616__$1,___$2,fn1__$1,meta35619){
return (new cljs.core.async.t_cljs$core$async35618(f__$1,ch__$1,meta35616__$1,___$2,fn1__$1,meta35619));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35618(self__.f,self__.ch,self__.meta35616,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30110__auto__ = ret;
if(cljs.core.truth_(and__30110__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30110__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35616","meta35616",774516613,null)], null);
});

cljs.core.async.t_cljs$core$async35615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35615";

cljs.core.async.t_cljs$core$async35615.cljs$lang$ctorPrWriter = (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async35615");
});

cljs.core.async.__GT_t_cljs$core$async35615 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35615(f__$1,ch__$1,meta35616){
return (new cljs.core.async.t_cljs$core$async35615(f__$1,ch__$1,meta35616));
});

}

return (new cljs.core.async.t_cljs$core$async35615(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35621 = (function (f,ch,meta35622){
this.f = f;
this.ch = ch;
this.meta35622 = meta35622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35623,meta35622__$1){
var self__ = this;
var _35623__$1 = this;
return (new cljs.core.async.t_cljs$core$async35621(self__.f,self__.ch,meta35622__$1));
});

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35623){
var self__ = this;
var _35623__$1 = this;
return self__.meta35622;
});

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35622","meta35622",939232313,null)], null);
});

cljs.core.async.t_cljs$core$async35621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35621";

cljs.core.async.t_cljs$core$async35621.cljs$lang$ctorPrWriter = (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async35621");
});

cljs.core.async.__GT_t_cljs$core$async35621 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35621(f__$1,ch__$1,meta35622){
return (new cljs.core.async.t_cljs$core$async35621(f__$1,ch__$1,meta35622));
});

}

return (new cljs.core.async.t_cljs$core$async35621(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35624 = (function (p,ch,meta35625){
this.p = p;
this.ch = ch;
this.meta35625 = meta35625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35626,meta35625__$1){
var self__ = this;
var _35626__$1 = this;
return (new cljs.core.async.t_cljs$core$async35624(self__.p,self__.ch,meta35625__$1));
});

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35626){
var self__ = this;
var _35626__$1 = this;
return self__.meta35625;
});

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35625","meta35625",1211176530,null)], null);
});

cljs.core.async.t_cljs$core$async35624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35624";

cljs.core.async.t_cljs$core$async35624.cljs$lang$ctorPrWriter = (function (this__30793__auto__,writer__30794__auto__,opt__30795__auto__){
return cljs.core._write.call(null,writer__30794__auto__,"cljs.core.async/t_cljs$core$async35624");
});

cljs.core.async.__GT_t_cljs$core$async35624 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35624(p__$1,ch__$1,meta35625){
return (new cljs.core.async.t_cljs$core$async35624(p__$1,ch__$1,meta35625));
});

}

return (new cljs.core.async.t_cljs$core$async35624(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35628 = arguments.length;
switch (G__35628) {
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
var c__34129__auto___35668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35668,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35668,out){
return (function (state_35649){
var state_val_35650 = (state_35649[(1)]);
if((state_val_35650 === (7))){
var inst_35645 = (state_35649[(2)]);
var state_35649__$1 = state_35649;
var statearr_35651_35669 = state_35649__$1;
(statearr_35651_35669[(2)] = inst_35645);

(statearr_35651_35669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (1))){
var state_35649__$1 = state_35649;
var statearr_35652_35670 = state_35649__$1;
(statearr_35652_35670[(2)] = null);

(statearr_35652_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (4))){
var inst_35631 = (state_35649[(7)]);
var inst_35631__$1 = (state_35649[(2)]);
var inst_35632 = (inst_35631__$1 == null);
var state_35649__$1 = (function (){var statearr_35653 = state_35649;
(statearr_35653[(7)] = inst_35631__$1);

return statearr_35653;
})();
if(cljs.core.truth_(inst_35632)){
var statearr_35654_35671 = state_35649__$1;
(statearr_35654_35671[(1)] = (5));

} else {
var statearr_35655_35672 = state_35649__$1;
(statearr_35655_35672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (6))){
var inst_35631 = (state_35649[(7)]);
var inst_35636 = p.call(null,inst_35631);
var state_35649__$1 = state_35649;
if(cljs.core.truth_(inst_35636)){
var statearr_35656_35673 = state_35649__$1;
(statearr_35656_35673[(1)] = (8));

} else {
var statearr_35657_35674 = state_35649__$1;
(statearr_35657_35674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (3))){
var inst_35647 = (state_35649[(2)]);
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35649__$1,inst_35647);
} else {
if((state_val_35650 === (2))){
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35649__$1,(4),ch);
} else {
if((state_val_35650 === (11))){
var inst_35639 = (state_35649[(2)]);
var state_35649__$1 = state_35649;
var statearr_35658_35675 = state_35649__$1;
(statearr_35658_35675[(2)] = inst_35639);

(statearr_35658_35675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (9))){
var state_35649__$1 = state_35649;
var statearr_35659_35676 = state_35649__$1;
(statearr_35659_35676[(2)] = null);

(statearr_35659_35676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (5))){
var inst_35634 = cljs.core.async.close_BANG_.call(null,out);
var state_35649__$1 = state_35649;
var statearr_35660_35677 = state_35649__$1;
(statearr_35660_35677[(2)] = inst_35634);

(statearr_35660_35677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (10))){
var inst_35642 = (state_35649[(2)]);
var state_35649__$1 = (function (){var statearr_35661 = state_35649;
(statearr_35661[(8)] = inst_35642);

return statearr_35661;
})();
var statearr_35662_35678 = state_35649__$1;
(statearr_35662_35678[(2)] = null);

(statearr_35662_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (8))){
var inst_35631 = (state_35649[(7)]);
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35649__$1,(11),out,inst_35631);
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
});})(c__34129__auto___35668,out))
;
return ((function (switch__34039__auto__,c__34129__auto___35668,out){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35663 = [null,null,null,null,null,null,null,null,null];
(statearr_35663[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35663[(1)] = (1));

return statearr_35663;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35649){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35664){if((e35664 instanceof Object)){
var ex__34043__auto__ = e35664;
var statearr_35665_35679 = state_35649;
(statearr_35665_35679[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35680 = state_35649;
state_35649 = G__35680;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35668,out))
})();
var state__34131__auto__ = (function (){var statearr_35666 = f__34130__auto__.call(null);
(statearr_35666[(6)] = c__34129__auto___35668);

return statearr_35666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35668,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35682 = arguments.length;
switch (G__35682) {
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
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__){
return (function (state_35745){
var state_val_35746 = (state_35745[(1)]);
if((state_val_35746 === (7))){
var inst_35741 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35747_35785 = state_35745__$1;
(statearr_35747_35785[(2)] = inst_35741);

(statearr_35747_35785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (20))){
var inst_35711 = (state_35745[(7)]);
var inst_35722 = (state_35745[(2)]);
var inst_35723 = cljs.core.next.call(null,inst_35711);
var inst_35697 = inst_35723;
var inst_35698 = null;
var inst_35699 = (0);
var inst_35700 = (0);
var state_35745__$1 = (function (){var statearr_35748 = state_35745;
(statearr_35748[(8)] = inst_35700);

(statearr_35748[(9)] = inst_35699);

(statearr_35748[(10)] = inst_35722);

(statearr_35748[(11)] = inst_35698);

(statearr_35748[(12)] = inst_35697);

return statearr_35748;
})();
var statearr_35749_35786 = state_35745__$1;
(statearr_35749_35786[(2)] = null);

(statearr_35749_35786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (1))){
var state_35745__$1 = state_35745;
var statearr_35750_35787 = state_35745__$1;
(statearr_35750_35787[(2)] = null);

(statearr_35750_35787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (4))){
var inst_35686 = (state_35745[(13)]);
var inst_35686__$1 = (state_35745[(2)]);
var inst_35687 = (inst_35686__$1 == null);
var state_35745__$1 = (function (){var statearr_35751 = state_35745;
(statearr_35751[(13)] = inst_35686__$1);

return statearr_35751;
})();
if(cljs.core.truth_(inst_35687)){
var statearr_35752_35788 = state_35745__$1;
(statearr_35752_35788[(1)] = (5));

} else {
var statearr_35753_35789 = state_35745__$1;
(statearr_35753_35789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (15))){
var state_35745__$1 = state_35745;
var statearr_35757_35790 = state_35745__$1;
(statearr_35757_35790[(2)] = null);

(statearr_35757_35790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (21))){
var state_35745__$1 = state_35745;
var statearr_35758_35791 = state_35745__$1;
(statearr_35758_35791[(2)] = null);

(statearr_35758_35791[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (13))){
var inst_35700 = (state_35745[(8)]);
var inst_35699 = (state_35745[(9)]);
var inst_35698 = (state_35745[(11)]);
var inst_35697 = (state_35745[(12)]);
var inst_35707 = (state_35745[(2)]);
var inst_35708 = (inst_35700 + (1));
var tmp35754 = inst_35699;
var tmp35755 = inst_35698;
var tmp35756 = inst_35697;
var inst_35697__$1 = tmp35756;
var inst_35698__$1 = tmp35755;
var inst_35699__$1 = tmp35754;
var inst_35700__$1 = inst_35708;
var state_35745__$1 = (function (){var statearr_35759 = state_35745;
(statearr_35759[(8)] = inst_35700__$1);

(statearr_35759[(9)] = inst_35699__$1);

(statearr_35759[(11)] = inst_35698__$1);

(statearr_35759[(12)] = inst_35697__$1);

(statearr_35759[(14)] = inst_35707);

return statearr_35759;
})();
var statearr_35760_35792 = state_35745__$1;
(statearr_35760_35792[(2)] = null);

(statearr_35760_35792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (22))){
var state_35745__$1 = state_35745;
var statearr_35761_35793 = state_35745__$1;
(statearr_35761_35793[(2)] = null);

(statearr_35761_35793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (6))){
var inst_35686 = (state_35745[(13)]);
var inst_35695 = f.call(null,inst_35686);
var inst_35696 = cljs.core.seq.call(null,inst_35695);
var inst_35697 = inst_35696;
var inst_35698 = null;
var inst_35699 = (0);
var inst_35700 = (0);
var state_35745__$1 = (function (){var statearr_35762 = state_35745;
(statearr_35762[(8)] = inst_35700);

(statearr_35762[(9)] = inst_35699);

(statearr_35762[(11)] = inst_35698);

(statearr_35762[(12)] = inst_35697);

return statearr_35762;
})();
var statearr_35763_35794 = state_35745__$1;
(statearr_35763_35794[(2)] = null);

(statearr_35763_35794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (17))){
var inst_35711 = (state_35745[(7)]);
var inst_35715 = cljs.core.chunk_first.call(null,inst_35711);
var inst_35716 = cljs.core.chunk_rest.call(null,inst_35711);
var inst_35717 = cljs.core.count.call(null,inst_35715);
var inst_35697 = inst_35716;
var inst_35698 = inst_35715;
var inst_35699 = inst_35717;
var inst_35700 = (0);
var state_35745__$1 = (function (){var statearr_35764 = state_35745;
(statearr_35764[(8)] = inst_35700);

(statearr_35764[(9)] = inst_35699);

(statearr_35764[(11)] = inst_35698);

(statearr_35764[(12)] = inst_35697);

return statearr_35764;
})();
var statearr_35765_35795 = state_35745__$1;
(statearr_35765_35795[(2)] = null);

(statearr_35765_35795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (3))){
var inst_35743 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35745__$1,inst_35743);
} else {
if((state_val_35746 === (12))){
var inst_35731 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35766_35796 = state_35745__$1;
(statearr_35766_35796[(2)] = inst_35731);

(statearr_35766_35796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (2))){
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35745__$1,(4),in$);
} else {
if((state_val_35746 === (23))){
var inst_35739 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35767_35797 = state_35745__$1;
(statearr_35767_35797[(2)] = inst_35739);

(statearr_35767_35797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (19))){
var inst_35726 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35768_35798 = state_35745__$1;
(statearr_35768_35798[(2)] = inst_35726);

(statearr_35768_35798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (11))){
var inst_35711 = (state_35745[(7)]);
var inst_35697 = (state_35745[(12)]);
var inst_35711__$1 = cljs.core.seq.call(null,inst_35697);
var state_35745__$1 = (function (){var statearr_35769 = state_35745;
(statearr_35769[(7)] = inst_35711__$1);

return statearr_35769;
})();
if(inst_35711__$1){
var statearr_35770_35799 = state_35745__$1;
(statearr_35770_35799[(1)] = (14));

} else {
var statearr_35771_35800 = state_35745__$1;
(statearr_35771_35800[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (9))){
var inst_35733 = (state_35745[(2)]);
var inst_35734 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35745__$1 = (function (){var statearr_35772 = state_35745;
(statearr_35772[(15)] = inst_35733);

return statearr_35772;
})();
if(cljs.core.truth_(inst_35734)){
var statearr_35773_35801 = state_35745__$1;
(statearr_35773_35801[(1)] = (21));

} else {
var statearr_35774_35802 = state_35745__$1;
(statearr_35774_35802[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (5))){
var inst_35689 = cljs.core.async.close_BANG_.call(null,out);
var state_35745__$1 = state_35745;
var statearr_35775_35803 = state_35745__$1;
(statearr_35775_35803[(2)] = inst_35689);

(statearr_35775_35803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (14))){
var inst_35711 = (state_35745[(7)]);
var inst_35713 = cljs.core.chunked_seq_QMARK_.call(null,inst_35711);
var state_35745__$1 = state_35745;
if(inst_35713){
var statearr_35776_35804 = state_35745__$1;
(statearr_35776_35804[(1)] = (17));

} else {
var statearr_35777_35805 = state_35745__$1;
(statearr_35777_35805[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (16))){
var inst_35729 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35778_35806 = state_35745__$1;
(statearr_35778_35806[(2)] = inst_35729);

(statearr_35778_35806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (10))){
var inst_35700 = (state_35745[(8)]);
var inst_35698 = (state_35745[(11)]);
var inst_35705 = cljs.core._nth.call(null,inst_35698,inst_35700);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35745__$1,(13),out,inst_35705);
} else {
if((state_val_35746 === (18))){
var inst_35711 = (state_35745[(7)]);
var inst_35720 = cljs.core.first.call(null,inst_35711);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35745__$1,(20),out,inst_35720);
} else {
if((state_val_35746 === (8))){
var inst_35700 = (state_35745[(8)]);
var inst_35699 = (state_35745[(9)]);
var inst_35702 = (inst_35700 < inst_35699);
var inst_35703 = inst_35702;
var state_35745__$1 = state_35745;
if(cljs.core.truth_(inst_35703)){
var statearr_35779_35807 = state_35745__$1;
(statearr_35779_35807[(1)] = (10));

} else {
var statearr_35780_35808 = state_35745__$1;
(statearr_35780_35808[(1)] = (11));

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
});})(c__34129__auto__))
;
return ((function (switch__34039__auto__,c__34129__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34040__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34040__auto____0 = (function (){
var statearr_35781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35781[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34040__auto__);

(statearr_35781[(1)] = (1));

return statearr_35781;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34040__auto____1 = (function (state_35745){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35782){if((e35782 instanceof Object)){
var ex__34043__auto__ = e35782;
var statearr_35783_35809 = state_35745;
(statearr_35783_35809[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35810 = state_35745;
state_35745 = G__35810;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34040__auto__ = function(state_35745){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34040__auto____1.call(this,state_35745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34040__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34040__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__))
})();
var state__34131__auto__ = (function (){var statearr_35784 = f__34130__auto__.call(null);
(statearr_35784[(6)] = c__34129__auto__);

return statearr_35784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__))
);

return c__34129__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35812 = arguments.length;
switch (G__35812) {
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
var G__35815 = arguments.length;
switch (G__35815) {
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
var G__35818 = arguments.length;
switch (G__35818) {
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
var c__34129__auto___35865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35865,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35865,out){
return (function (state_35842){
var state_val_35843 = (state_35842[(1)]);
if((state_val_35843 === (7))){
var inst_35837 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35844_35866 = state_35842__$1;
(statearr_35844_35866[(2)] = inst_35837);

(statearr_35844_35866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (1))){
var inst_35819 = null;
var state_35842__$1 = (function (){var statearr_35845 = state_35842;
(statearr_35845[(7)] = inst_35819);

return statearr_35845;
})();
var statearr_35846_35867 = state_35842__$1;
(statearr_35846_35867[(2)] = null);

(statearr_35846_35867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (4))){
var inst_35822 = (state_35842[(8)]);
var inst_35822__$1 = (state_35842[(2)]);
var inst_35823 = (inst_35822__$1 == null);
var inst_35824 = cljs.core.not.call(null,inst_35823);
var state_35842__$1 = (function (){var statearr_35847 = state_35842;
(statearr_35847[(8)] = inst_35822__$1);

return statearr_35847;
})();
if(inst_35824){
var statearr_35848_35868 = state_35842__$1;
(statearr_35848_35868[(1)] = (5));

} else {
var statearr_35849_35869 = state_35842__$1;
(statearr_35849_35869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (6))){
var state_35842__$1 = state_35842;
var statearr_35850_35870 = state_35842__$1;
(statearr_35850_35870[(2)] = null);

(statearr_35850_35870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (3))){
var inst_35839 = (state_35842[(2)]);
var inst_35840 = cljs.core.async.close_BANG_.call(null,out);
var state_35842__$1 = (function (){var statearr_35851 = state_35842;
(statearr_35851[(9)] = inst_35839);

return statearr_35851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35842__$1,inst_35840);
} else {
if((state_val_35843 === (2))){
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35842__$1,(4),ch);
} else {
if((state_val_35843 === (11))){
var inst_35822 = (state_35842[(8)]);
var inst_35831 = (state_35842[(2)]);
var inst_35819 = inst_35822;
var state_35842__$1 = (function (){var statearr_35852 = state_35842;
(statearr_35852[(7)] = inst_35819);

(statearr_35852[(10)] = inst_35831);

return statearr_35852;
})();
var statearr_35853_35871 = state_35842__$1;
(statearr_35853_35871[(2)] = null);

(statearr_35853_35871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (9))){
var inst_35822 = (state_35842[(8)]);
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35842__$1,(11),out,inst_35822);
} else {
if((state_val_35843 === (5))){
var inst_35822 = (state_35842[(8)]);
var inst_35819 = (state_35842[(7)]);
var inst_35826 = cljs.core._EQ_.call(null,inst_35822,inst_35819);
var state_35842__$1 = state_35842;
if(inst_35826){
var statearr_35855_35872 = state_35842__$1;
(statearr_35855_35872[(1)] = (8));

} else {
var statearr_35856_35873 = state_35842__$1;
(statearr_35856_35873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (10))){
var inst_35834 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35857_35874 = state_35842__$1;
(statearr_35857_35874[(2)] = inst_35834);

(statearr_35857_35874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (8))){
var inst_35819 = (state_35842[(7)]);
var tmp35854 = inst_35819;
var inst_35819__$1 = tmp35854;
var state_35842__$1 = (function (){var statearr_35858 = state_35842;
(statearr_35858[(7)] = inst_35819__$1);

return statearr_35858;
})();
var statearr_35859_35875 = state_35842__$1;
(statearr_35859_35875[(2)] = null);

(statearr_35859_35875[(1)] = (2));


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
});})(c__34129__auto___35865,out))
;
return ((function (switch__34039__auto__,c__34129__auto___35865,out){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35860[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35860[(1)] = (1));

return statearr_35860;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35842){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35861){if((e35861 instanceof Object)){
var ex__34043__auto__ = e35861;
var statearr_35862_35876 = state_35842;
(statearr_35862_35876[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35877 = state_35842;
state_35842 = G__35877;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35865,out))
})();
var state__34131__auto__ = (function (){var statearr_35863 = f__34130__auto__.call(null);
(statearr_35863[(6)] = c__34129__auto___35865);

return statearr_35863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35865,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35879 = arguments.length;
switch (G__35879) {
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
var c__34129__auto___35945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___35945,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___35945,out){
return (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (7))){
var inst_35913 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35919_35946 = state_35917__$1;
(statearr_35919_35946[(2)] = inst_35913);

(statearr_35919_35946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (1))){
var inst_35880 = (new Array(n));
var inst_35881 = inst_35880;
var inst_35882 = (0);
var state_35917__$1 = (function (){var statearr_35920 = state_35917;
(statearr_35920[(7)] = inst_35881);

(statearr_35920[(8)] = inst_35882);

return statearr_35920;
})();
var statearr_35921_35947 = state_35917__$1;
(statearr_35921_35947[(2)] = null);

(statearr_35921_35947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (4))){
var inst_35885 = (state_35917[(9)]);
var inst_35885__$1 = (state_35917[(2)]);
var inst_35886 = (inst_35885__$1 == null);
var inst_35887 = cljs.core.not.call(null,inst_35886);
var state_35917__$1 = (function (){var statearr_35922 = state_35917;
(statearr_35922[(9)] = inst_35885__$1);

return statearr_35922;
})();
if(inst_35887){
var statearr_35923_35948 = state_35917__$1;
(statearr_35923_35948[(1)] = (5));

} else {
var statearr_35924_35949 = state_35917__$1;
(statearr_35924_35949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (15))){
var inst_35907 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35925_35950 = state_35917__$1;
(statearr_35925_35950[(2)] = inst_35907);

(statearr_35925_35950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (13))){
var state_35917__$1 = state_35917;
var statearr_35926_35951 = state_35917__$1;
(statearr_35926_35951[(2)] = null);

(statearr_35926_35951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (6))){
var inst_35882 = (state_35917[(8)]);
var inst_35903 = (inst_35882 > (0));
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35903)){
var statearr_35927_35952 = state_35917__$1;
(statearr_35927_35952[(1)] = (12));

} else {
var statearr_35928_35953 = state_35917__$1;
(statearr_35928_35953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (3))){
var inst_35915 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35917__$1,inst_35915);
} else {
if((state_val_35918 === (12))){
var inst_35881 = (state_35917[(7)]);
var inst_35905 = cljs.core.vec.call(null,inst_35881);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35917__$1,(15),out,inst_35905);
} else {
if((state_val_35918 === (2))){
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35917__$1,(4),ch);
} else {
if((state_val_35918 === (11))){
var inst_35897 = (state_35917[(2)]);
var inst_35898 = (new Array(n));
var inst_35881 = inst_35898;
var inst_35882 = (0);
var state_35917__$1 = (function (){var statearr_35929 = state_35917;
(statearr_35929[(7)] = inst_35881);

(statearr_35929[(8)] = inst_35882);

(statearr_35929[(10)] = inst_35897);

return statearr_35929;
})();
var statearr_35930_35954 = state_35917__$1;
(statearr_35930_35954[(2)] = null);

(statearr_35930_35954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (9))){
var inst_35881 = (state_35917[(7)]);
var inst_35895 = cljs.core.vec.call(null,inst_35881);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35917__$1,(11),out,inst_35895);
} else {
if((state_val_35918 === (5))){
var inst_35881 = (state_35917[(7)]);
var inst_35882 = (state_35917[(8)]);
var inst_35890 = (state_35917[(11)]);
var inst_35885 = (state_35917[(9)]);
var inst_35889 = (inst_35881[inst_35882] = inst_35885);
var inst_35890__$1 = (inst_35882 + (1));
var inst_35891 = (inst_35890__$1 < n);
var state_35917__$1 = (function (){var statearr_35931 = state_35917;
(statearr_35931[(12)] = inst_35889);

(statearr_35931[(11)] = inst_35890__$1);

return statearr_35931;
})();
if(cljs.core.truth_(inst_35891)){
var statearr_35932_35955 = state_35917__$1;
(statearr_35932_35955[(1)] = (8));

} else {
var statearr_35933_35956 = state_35917__$1;
(statearr_35933_35956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (14))){
var inst_35910 = (state_35917[(2)]);
var inst_35911 = cljs.core.async.close_BANG_.call(null,out);
var state_35917__$1 = (function (){var statearr_35935 = state_35917;
(statearr_35935[(13)] = inst_35910);

return statearr_35935;
})();
var statearr_35936_35957 = state_35917__$1;
(statearr_35936_35957[(2)] = inst_35911);

(statearr_35936_35957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (10))){
var inst_35901 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35937_35958 = state_35917__$1;
(statearr_35937_35958[(2)] = inst_35901);

(statearr_35937_35958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (8))){
var inst_35881 = (state_35917[(7)]);
var inst_35890 = (state_35917[(11)]);
var tmp35934 = inst_35881;
var inst_35881__$1 = tmp35934;
var inst_35882 = inst_35890;
var state_35917__$1 = (function (){var statearr_35938 = state_35917;
(statearr_35938[(7)] = inst_35881__$1);

(statearr_35938[(8)] = inst_35882);

return statearr_35938;
})();
var statearr_35939_35959 = state_35917__$1;
(statearr_35939_35959[(2)] = null);

(statearr_35939_35959[(1)] = (2));


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
});})(c__34129__auto___35945,out))
;
return ((function (switch__34039__auto__,c__34129__auto___35945,out){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_35940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35940[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_35940[(1)] = (1));

return statearr_35940;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_35917){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_35917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e35941){if((e35941 instanceof Object)){
var ex__34043__auto__ = e35941;
var statearr_35942_35960 = state_35917;
(statearr_35942_35960[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35961 = state_35917;
state_35917 = G__35961;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___35945,out))
})();
var state__34131__auto__ = (function (){var statearr_35943 = f__34130__auto__.call(null);
(statearr_35943[(6)] = c__34129__auto___35945);

return statearr_35943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___35945,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35963 = arguments.length;
switch (G__35963) {
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
var c__34129__auto___36033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___36033,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___36033,out){
return (function (state_36005){
var state_val_36006 = (state_36005[(1)]);
if((state_val_36006 === (7))){
var inst_36001 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
var statearr_36007_36034 = state_36005__$1;
(statearr_36007_36034[(2)] = inst_36001);

(statearr_36007_36034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (1))){
var inst_35964 = [];
var inst_35965 = inst_35964;
var inst_35966 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36005__$1 = (function (){var statearr_36008 = state_36005;
(statearr_36008[(7)] = inst_35965);

(statearr_36008[(8)] = inst_35966);

return statearr_36008;
})();
var statearr_36009_36035 = state_36005__$1;
(statearr_36009_36035[(2)] = null);

(statearr_36009_36035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (4))){
var inst_35969 = (state_36005[(9)]);
var inst_35969__$1 = (state_36005[(2)]);
var inst_35970 = (inst_35969__$1 == null);
var inst_35971 = cljs.core.not.call(null,inst_35970);
var state_36005__$1 = (function (){var statearr_36010 = state_36005;
(statearr_36010[(9)] = inst_35969__$1);

return statearr_36010;
})();
if(inst_35971){
var statearr_36011_36036 = state_36005__$1;
(statearr_36011_36036[(1)] = (5));

} else {
var statearr_36012_36037 = state_36005__$1;
(statearr_36012_36037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (15))){
var inst_35995 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
var statearr_36013_36038 = state_36005__$1;
(statearr_36013_36038[(2)] = inst_35995);

(statearr_36013_36038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (13))){
var state_36005__$1 = state_36005;
var statearr_36014_36039 = state_36005__$1;
(statearr_36014_36039[(2)] = null);

(statearr_36014_36039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (6))){
var inst_35965 = (state_36005[(7)]);
var inst_35990 = inst_35965.length;
var inst_35991 = (inst_35990 > (0));
var state_36005__$1 = state_36005;
if(cljs.core.truth_(inst_35991)){
var statearr_36015_36040 = state_36005__$1;
(statearr_36015_36040[(1)] = (12));

} else {
var statearr_36016_36041 = state_36005__$1;
(statearr_36016_36041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (3))){
var inst_36003 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36005__$1,inst_36003);
} else {
if((state_val_36006 === (12))){
var inst_35965 = (state_36005[(7)]);
var inst_35993 = cljs.core.vec.call(null,inst_35965);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36005__$1,(15),out,inst_35993);
} else {
if((state_val_36006 === (2))){
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36005__$1,(4),ch);
} else {
if((state_val_36006 === (11))){
var inst_35973 = (state_36005[(10)]);
var inst_35969 = (state_36005[(9)]);
var inst_35983 = (state_36005[(2)]);
var inst_35984 = [];
var inst_35985 = inst_35984.push(inst_35969);
var inst_35965 = inst_35984;
var inst_35966 = inst_35973;
var state_36005__$1 = (function (){var statearr_36017 = state_36005;
(statearr_36017[(11)] = inst_35985);

(statearr_36017[(7)] = inst_35965);

(statearr_36017[(8)] = inst_35966);

(statearr_36017[(12)] = inst_35983);

return statearr_36017;
})();
var statearr_36018_36042 = state_36005__$1;
(statearr_36018_36042[(2)] = null);

(statearr_36018_36042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (9))){
var inst_35965 = (state_36005[(7)]);
var inst_35981 = cljs.core.vec.call(null,inst_35965);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36005__$1,(11),out,inst_35981);
} else {
if((state_val_36006 === (5))){
var inst_35973 = (state_36005[(10)]);
var inst_35969 = (state_36005[(9)]);
var inst_35966 = (state_36005[(8)]);
var inst_35973__$1 = f.call(null,inst_35969);
var inst_35974 = cljs.core._EQ_.call(null,inst_35973__$1,inst_35966);
var inst_35975 = cljs.core.keyword_identical_QMARK_.call(null,inst_35966,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35976 = (inst_35974) || (inst_35975);
var state_36005__$1 = (function (){var statearr_36019 = state_36005;
(statearr_36019[(10)] = inst_35973__$1);

return statearr_36019;
})();
if(cljs.core.truth_(inst_35976)){
var statearr_36020_36043 = state_36005__$1;
(statearr_36020_36043[(1)] = (8));

} else {
var statearr_36021_36044 = state_36005__$1;
(statearr_36021_36044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (14))){
var inst_35998 = (state_36005[(2)]);
var inst_35999 = cljs.core.async.close_BANG_.call(null,out);
var state_36005__$1 = (function (){var statearr_36023 = state_36005;
(statearr_36023[(13)] = inst_35998);

return statearr_36023;
})();
var statearr_36024_36045 = state_36005__$1;
(statearr_36024_36045[(2)] = inst_35999);

(statearr_36024_36045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (10))){
var inst_35988 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
var statearr_36025_36046 = state_36005__$1;
(statearr_36025_36046[(2)] = inst_35988);

(statearr_36025_36046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (8))){
var inst_35973 = (state_36005[(10)]);
var inst_35965 = (state_36005[(7)]);
var inst_35969 = (state_36005[(9)]);
var inst_35978 = inst_35965.push(inst_35969);
var tmp36022 = inst_35965;
var inst_35965__$1 = tmp36022;
var inst_35966 = inst_35973;
var state_36005__$1 = (function (){var statearr_36026 = state_36005;
(statearr_36026[(14)] = inst_35978);

(statearr_36026[(7)] = inst_35965__$1);

(statearr_36026[(8)] = inst_35966);

return statearr_36026;
})();
var statearr_36027_36047 = state_36005__$1;
(statearr_36027_36047[(2)] = null);

(statearr_36027_36047[(1)] = (2));


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
});})(c__34129__auto___36033,out))
;
return ((function (switch__34039__auto__,c__34129__auto___36033,out){
return (function() {
var cljs$core$async$state_machine__34040__auto__ = null;
var cljs$core$async$state_machine__34040__auto____0 = (function (){
var statearr_36028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36028[(0)] = cljs$core$async$state_machine__34040__auto__);

(statearr_36028[(1)] = (1));

return statearr_36028;
});
var cljs$core$async$state_machine__34040__auto____1 = (function (state_36005){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_36005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e36029){if((e36029 instanceof Object)){
var ex__34043__auto__ = e36029;
var statearr_36030_36048 = state_36005;
(statearr_36030_36048[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36049 = state_36005;
state_36005 = G__36049;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
cljs$core$async$state_machine__34040__auto__ = function(state_36005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34040__auto____1.call(this,state_36005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34040__auto____0;
cljs$core$async$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34040__auto____1;
return cljs$core$async$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___36033,out))
})();
var state__34131__auto__ = (function (){var statearr_36031 = f__34130__auto__.call(null);
(statearr_36031[(6)] = c__34129__auto___36033);

return statearr_36031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___36033,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1543501869941
