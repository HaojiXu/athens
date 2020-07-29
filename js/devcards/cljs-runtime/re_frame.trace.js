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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51324){
var map__51325 = p__51324;
var map__51325__$1 = (((((!((map__51325 == null))))?(((((map__51325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51325):map__51325);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__51329_51358 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51330_51359 = null;
var count__51331_51360 = (0);
var i__51332_51361 = (0);
while(true){
if((i__51332_51361 < count__51331_51360)){
var vec__51343_51362 = chunk__51330_51359.cljs$core$IIndexed$_nth$arity$2(null,i__51332_51361);
var k_51363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51343_51362,(0),null);
var cb_51364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51343_51362,(1),null);
try{var G__51347_51365 = cljs.core.deref(re_frame.trace.traces);
(cb_51364.cljs$core$IFn$_invoke$arity$1 ? cb_51364.cljs$core$IFn$_invoke$arity$1(G__51347_51365) : cb_51364.call(null,G__51347_51365));
}catch (e51346){var e_51366 = e51346;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51363,"while storing",cljs.core.deref(re_frame.trace.traces),e_51366], 0));
}

var G__51367 = seq__51329_51358;
var G__51368 = chunk__51330_51359;
var G__51369 = count__51331_51360;
var G__51370 = (i__51332_51361 + (1));
seq__51329_51358 = G__51367;
chunk__51330_51359 = G__51368;
count__51331_51360 = G__51369;
i__51332_51361 = G__51370;
continue;
} else {
var temp__5735__auto___51371 = cljs.core.seq(seq__51329_51358);
if(temp__5735__auto___51371){
var seq__51329_51372__$1 = temp__5735__auto___51371;
if(cljs.core.chunked_seq_QMARK_(seq__51329_51372__$1)){
var c__4609__auto___51373 = cljs.core.chunk_first(seq__51329_51372__$1);
var G__51374 = cljs.core.chunk_rest(seq__51329_51372__$1);
var G__51375 = c__4609__auto___51373;
var G__51376 = cljs.core.count(c__4609__auto___51373);
var G__51377 = (0);
seq__51329_51358 = G__51374;
chunk__51330_51359 = G__51375;
count__51331_51360 = G__51376;
i__51332_51361 = G__51377;
continue;
} else {
var vec__51348_51378 = cljs.core.first(seq__51329_51372__$1);
var k_51379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51348_51378,(0),null);
var cb_51380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51348_51378,(1),null);
try{var G__51352_51381 = cljs.core.deref(re_frame.trace.traces);
(cb_51380.cljs$core$IFn$_invoke$arity$1 ? cb_51380.cljs$core$IFn$_invoke$arity$1(G__51352_51381) : cb_51380.call(null,G__51352_51381));
}catch (e51351){var e_51382 = e51351;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51379,"while storing",cljs.core.deref(re_frame.trace.traces),e_51382], 0));
}

var G__51383 = cljs.core.next(seq__51329_51372__$1);
var G__51384 = null;
var G__51385 = (0);
var G__51386 = (0);
seq__51329_51358 = G__51383;
chunk__51330_51359 = G__51384;
count__51331_51360 = G__51385;
i__51332_51361 = G__51386;
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
