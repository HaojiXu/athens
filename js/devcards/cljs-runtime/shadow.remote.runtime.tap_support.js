goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61349,p__61350){
var map__61351 = p__61349;
var map__61351__$1 = (((((!((map__61351 == null))))?(((((map__61351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61351):map__61351);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61352 = p__61350;
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61355,p__61356){
var map__61357 = p__61355;
var map__61357__$1 = (((((!((map__61357 == null))))?(((((map__61357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61357):map__61357);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61358 = p__61356;
var map__61358__$1 = (((((!((map__61358 == null))))?(((((map__61358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61358):map__61358);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61358__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61363,p__61364){
var map__61365 = p__61363;
var map__61365__$1 = (((((!((map__61365 == null))))?(((((map__61365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61365):map__61365);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61366 = p__61364;
var map__61366__$1 = (((((!((map__61366 == null))))?(((((map__61366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61366):map__61366);
var msg = map__61366__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61366__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61369 = obj_support;
var map__61369__$1 = (((((!((map__61369 == null))))?(((((map__61369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61369):map__61369);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61362_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61362_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61361_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61361_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61371,tid){
var map__61372 = p__61371;
var map__61372__$1 = (((((!((map__61372 == null))))?(((((map__61372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61372):map__61372);
var svc = map__61372__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61378 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61379 = null;
var count__61380 = (0);
var i__61381 = (0);
while(true){
if((i__61381 < count__61380)){
var tid = chunk__61379.cljs$core$IIndexed$_nth$arity$2(null,i__61381);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61385 = seq__61378;
var G__61386 = chunk__61379;
var G__61387 = count__61380;
var G__61388 = (i__61381 + (1));
seq__61378 = G__61385;
chunk__61379 = G__61386;
count__61380 = G__61387;
i__61381 = G__61388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61378);
if(temp__5735__auto__){
var seq__61378__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61378__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61378__$1);
var G__61389 = cljs.core.chunk_rest(seq__61378__$1);
var G__61390 = c__4609__auto__;
var G__61391 = cljs.core.count(c__4609__auto__);
var G__61392 = (0);
seq__61378 = G__61389;
chunk__61379 = G__61390;
count__61380 = G__61391;
i__61381 = G__61392;
continue;
} else {
var tid = cljs.core.first(seq__61378__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61393 = cljs.core.next(seq__61378__$1);
var G__61394 = null;
var G__61395 = (0);
var G__61396 = (0);
seq__61378 = G__61393;
chunk__61379 = G__61394;
count__61380 = G__61395;
i__61381 = G__61396;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61374_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61374_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61375_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61375_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61376_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61376_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61377_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61377_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61382){
var map__61383 = p__61382;
var map__61383__$1 = (((((!((map__61383 == null))))?(((((map__61383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61383):map__61383);
var svc = map__61383__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61383__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61383__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
