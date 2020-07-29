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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52204 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52205 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52205);

try{try{var seq__52206 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52207 = null;
var count__52208 = (0);
var i__52209 = (0);
while(true){
if((i__52209 < count__52208)){
var vec__52216 = chunk__52207.cljs$core$IIndexed$_nth$arity$2(null,i__52209);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(1),null);
var temp__5733__auto___52261 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52261)){
var effect_fn_52262 = temp__5733__auto___52261;
(effect_fn_52262.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52262.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52262.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52263 = seq__52206;
var G__52264 = chunk__52207;
var G__52265 = count__52208;
var G__52266 = (i__52209 + (1));
seq__52206 = G__52263;
chunk__52207 = G__52264;
count__52208 = G__52265;
i__52209 = G__52266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52206);
if(temp__5735__auto__){
var seq__52206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52206__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52206__$1);
var G__52267 = cljs.core.chunk_rest(seq__52206__$1);
var G__52268 = c__4609__auto__;
var G__52269 = cljs.core.count(c__4609__auto__);
var G__52270 = (0);
seq__52206 = G__52267;
chunk__52207 = G__52268;
count__52208 = G__52269;
i__52209 = G__52270;
continue;
} else {
var vec__52219 = cljs.core.first(seq__52206__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52219,(1),null);
var temp__5733__auto___52271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52271)){
var effect_fn_52272 = temp__5733__auto___52271;
(effect_fn_52272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52272.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52273 = cljs.core.next(seq__52206__$1);
var G__52274 = null;
var G__52275 = (0);
var G__52276 = (0);
seq__52206 = G__52273;
chunk__52207 = G__52274;
count__52208 = G__52275;
i__52209 = G__52276;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51290__auto___52277 = re_frame.interop.now();
var duration__51291__auto___52278 = (end__51290__auto___52277 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51291__auto___52278,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51290__auto___52277);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52204);
}} else {
var seq__52224 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52225 = null;
var count__52226 = (0);
var i__52227 = (0);
while(true){
if((i__52227 < count__52226)){
var vec__52234 = chunk__52225.cljs$core$IIndexed$_nth$arity$2(null,i__52227);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52234,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52234,(1),null);
var temp__5733__auto___52279 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52279)){
var effect_fn_52280 = temp__5733__auto___52279;
(effect_fn_52280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52280.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52281 = seq__52224;
var G__52282 = chunk__52225;
var G__52283 = count__52226;
var G__52284 = (i__52227 + (1));
seq__52224 = G__52281;
chunk__52225 = G__52282;
count__52226 = G__52283;
i__52227 = G__52284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52224);
if(temp__5735__auto__){
var seq__52224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52224__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52224__$1);
var G__52285 = cljs.core.chunk_rest(seq__52224__$1);
var G__52286 = c__4609__auto__;
var G__52287 = cljs.core.count(c__4609__auto__);
var G__52288 = (0);
seq__52224 = G__52285;
chunk__52225 = G__52286;
count__52226 = G__52287;
i__52227 = G__52288;
continue;
} else {
var vec__52237 = cljs.core.first(seq__52224__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52237,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52237,(1),null);
var temp__5733__auto___52289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52289)){
var effect_fn_52290 = temp__5733__auto___52289;
(effect_fn_52290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52291 = cljs.core.next(seq__52224__$1);
var G__52292 = null;
var G__52293 = (0);
var G__52294 = (0);
seq__52224 = G__52291;
chunk__52225 = G__52292;
count__52226 = G__52293;
i__52227 = G__52294;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52241 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52242 = null;
var count__52243 = (0);
var i__52244 = (0);
while(true){
if((i__52244 < count__52243)){
var map__52249 = chunk__52242.cljs$core$IIndexed$_nth$arity$2(null,i__52244);
var map__52249__$1 = (((((!((map__52249 == null))))?(((((map__52249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52249):map__52249);
var effect = map__52249__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52249__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52249__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52241,chunk__52242,count__52243,i__52244,map__52249,map__52249__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52241,chunk__52242,count__52243,i__52244,map__52249,map__52249__$1,effect,ms,dispatch))
,ms);
}


var G__52298 = seq__52241;
var G__52299 = chunk__52242;
var G__52300 = count__52243;
var G__52301 = (i__52244 + (1));
seq__52241 = G__52298;
chunk__52242 = G__52299;
count__52243 = G__52300;
i__52244 = G__52301;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52241);
if(temp__5735__auto__){
var seq__52241__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52241__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52241__$1);
var G__52302 = cljs.core.chunk_rest(seq__52241__$1);
var G__52303 = c__4609__auto__;
var G__52304 = cljs.core.count(c__4609__auto__);
var G__52305 = (0);
seq__52241 = G__52302;
chunk__52242 = G__52303;
count__52243 = G__52304;
i__52244 = G__52305;
continue;
} else {
var map__52251 = cljs.core.first(seq__52241__$1);
var map__52251__$1 = (((((!((map__52251 == null))))?(((((map__52251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52251):map__52251);
var effect = map__52251__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52251__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52251__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52241,chunk__52242,count__52243,i__52244,map__52251,map__52251__$1,effect,ms,dispatch,seq__52241__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52241,chunk__52242,count__52243,i__52244,map__52251,map__52251__$1,effect,ms,dispatch,seq__52241__$1,temp__5735__auto__))
,ms);
}


var G__52306 = cljs.core.next(seq__52241__$1);
var G__52307 = null;
var G__52308 = (0);
var G__52309 = (0);
seq__52241 = G__52306;
chunk__52242 = G__52307;
count__52243 = G__52308;
i__52244 = G__52309;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52253 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52254 = null;
var count__52255 = (0);
var i__52256 = (0);
while(true){
if((i__52256 < count__52255)){
var event = chunk__52254.cljs$core$IIndexed$_nth$arity$2(null,i__52256);
re_frame.router.dispatch(event);


var G__52312 = seq__52253;
var G__52313 = chunk__52254;
var G__52314 = count__52255;
var G__52315 = (i__52256 + (1));
seq__52253 = G__52312;
chunk__52254 = G__52313;
count__52255 = G__52314;
i__52256 = G__52315;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52253);
if(temp__5735__auto__){
var seq__52253__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52253__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52253__$1);
var G__52318 = cljs.core.chunk_rest(seq__52253__$1);
var G__52319 = c__4609__auto__;
var G__52320 = cljs.core.count(c__4609__auto__);
var G__52321 = (0);
seq__52253 = G__52318;
chunk__52254 = G__52319;
count__52255 = G__52320;
i__52256 = G__52321;
continue;
} else {
var event = cljs.core.first(seq__52253__$1);
re_frame.router.dispatch(event);


var G__52322 = cljs.core.next(seq__52253__$1);
var G__52323 = null;
var G__52324 = (0);
var G__52325 = (0);
seq__52253 = G__52322;
chunk__52254 = G__52323;
count__52255 = G__52324;
i__52256 = G__52325;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52257 = cljs.core.seq(value);
var chunk__52258 = null;
var count__52259 = (0);
var i__52260 = (0);
while(true){
if((i__52260 < count__52259)){
var event = chunk__52258.cljs$core$IIndexed$_nth$arity$2(null,i__52260);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52328 = seq__52257;
var G__52329 = chunk__52258;
var G__52330 = count__52259;
var G__52331 = (i__52260 + (1));
seq__52257 = G__52328;
chunk__52258 = G__52329;
count__52259 = G__52330;
i__52260 = G__52331;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52257);
if(temp__5735__auto__){
var seq__52257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52257__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52257__$1);
var G__52332 = cljs.core.chunk_rest(seq__52257__$1);
var G__52333 = c__4609__auto__;
var G__52334 = cljs.core.count(c__4609__auto__);
var G__52335 = (0);
seq__52257 = G__52332;
chunk__52258 = G__52333;
count__52259 = G__52334;
i__52260 = G__52335;
continue;
} else {
var event = cljs.core.first(seq__52257__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52336 = cljs.core.next(seq__52257__$1);
var G__52337 = null;
var G__52338 = (0);
var G__52339 = (0);
seq__52257 = G__52336;
chunk__52258 = G__52337;
count__52259 = G__52338;
i__52260 = G__52339;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
