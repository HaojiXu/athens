goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51327){
var map__51328 = p__51327;
var map__51328__$1 = (((((!((map__51328 == null))))?(((((map__51328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51328):map__51328);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51331_51363 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51332_51364 = null;
var count__51333_51365 = (0);
var i__51334_51366 = (0);
while(true){
if((i__51334_51366 < count__51333_51365)){
var vec__51346_51367 = chunk__51332_51364.cljs$core$IIndexed$_nth$arity$2(null,i__51334_51366);
var k_51368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_51367,(0),null);
var cb_51369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_51367,(1),null);
try{var G__51350_51374 = cljs.core.deref(re_frame.trace.traces);
(cb_51369.cljs$core$IFn$_invoke$arity$1 ? cb_51369.cljs$core$IFn$_invoke$arity$1(G__51350_51374) : cb_51369.call(null,G__51350_51374));
}catch (e51349){var e_51375 = e51349;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51368,"while storing",cljs.core.deref(re_frame.trace.traces),e_51375], 0));
}

var G__51376 = seq__51331_51363;
var G__51377 = chunk__51332_51364;
var G__51378 = count__51333_51365;
var G__51379 = (i__51334_51366 + (1));
seq__51331_51363 = G__51376;
chunk__51332_51364 = G__51377;
count__51333_51365 = G__51378;
i__51334_51366 = G__51379;
continue;
} else {
var temp__5735__auto___51380 = cljs.core.seq(seq__51331_51363);
if(temp__5735__auto___51380){
var seq__51331_51381__$1 = temp__5735__auto___51380;
if(cljs.core.chunked_seq_QMARK_(seq__51331_51381__$1)){
var c__4609__auto___51382 = cljs.core.chunk_first(seq__51331_51381__$1);
var G__51383 = cljs.core.chunk_rest(seq__51331_51381__$1);
var G__51384 = c__4609__auto___51382;
var G__51385 = cljs.core.count(c__4609__auto___51382);
var G__51386 = (0);
seq__51331_51363 = G__51383;
chunk__51332_51364 = G__51384;
count__51333_51365 = G__51385;
i__51334_51366 = G__51386;
continue;
} else {
var vec__51351_51391 = cljs.core.first(seq__51331_51381__$1);
var k_51392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51351_51391,(0),null);
var cb_51393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51351_51391,(1),null);
try{var G__51355_51394 = cljs.core.deref(re_frame.trace.traces);
(cb_51393.cljs$core$IFn$_invoke$arity$1 ? cb_51393.cljs$core$IFn$_invoke$arity$1(G__51355_51394) : cb_51393.call(null,G__51355_51394));
}catch (e51354){var e_51397 = e51354;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51392,"while storing",cljs.core.deref(re_frame.trace.traces),e_51397], 0));
}

var G__51398 = cljs.core.next(seq__51331_51381__$1);
var G__51399 = null;
var G__51400 = (0);
var G__51401 = (0);
seq__51331_51363 = G__51398;
chunk__51332_51364 = G__51399;
count__51333_51365 = G__51400;
i__51334_51366 = G__51401;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
