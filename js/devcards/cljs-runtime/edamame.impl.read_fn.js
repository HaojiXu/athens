goog.provide('edamame.impl.read_fn');
goog.require('cljs.core');
/**
 * Preserves metadata, unlike clojure.walk/walk.
 */
edamame.impl.read_fn.walk_STAR_ = (function edamame$impl$read_fn$walk_STAR_(inner,outer,form){
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta((function (){var G__59416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__59416) : outer.call(null,G__59416));
})(),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
var G__59417 = (new cljs.core.MapEntry((function (){var G__59418 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__59418) : inner.call(null,G__59418));
})(),(function (){var G__59419 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__59419) : inner.call(null,G__59419));
})(),null));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__59417) : outer.call(null,G__59417));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta((function (){var G__59420 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__59420) : outer.call(null,G__59420));
})(),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
var G__59421 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__59421) : outer.call(null,G__59421));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__59422 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__59422) : outer.call(null,G__59422));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
}
}
}
});
/**
 * Preserves metadata, unlike clojure.walk/postwalk.
 */
edamame.impl.read_fn.postwalk_STAR_ = (function edamame$impl$read_fn$postwalk_STAR_(f,form){
return edamame.impl.read_fn.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(edamame.impl.read_fn.postwalk_STAR_,f),f,form);
});
edamame.impl.read_fn.read_fn = (function edamame$impl$read_fn$read_fn(expr){
var state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(0),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),false], null));
var expr__$1 = edamame.impl.read_fn.postwalk_STAR_((function (elt){
if((elt instanceof cljs.core.Symbol)){
var temp__5733__auto__ = cljs.core.re_matches(/^%(.*)/,cljs.core.name(elt));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59425 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59425,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59425,(1),null);
if(cljs.core.empty_QMARK_(m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,(1)));

return new cljs.core.Symbol(null,"%1","%1",1309450150,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),true));

return elt;
} else {
var n_59429 = parseInt(m);
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,n_59429));

return elt;

}
}
} else {
return elt;
}
} else {
return elt;
}
}),expr);
var map__59424 = cljs.core.deref(state);
var map__59424__$1 = (((((!((map__59424 == null))))?(((((map__59424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59424):map__59424);
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var var_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710));
var fixed_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59423_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59423_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(max_fixed + (1))));
var var_args_sym = new cljs.core.Symbol(null,"%&","%&",-728707069,null);
var arg_list = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fixed_names,(cljs.core.truth_(var_args_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),var_args_sym], null):null)));
var form = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,arg_list,(new cljs.core.List(null,expr__$1,null,(1),null)),(2),null)),(3),null));
return form;
});

//# sourceMappingURL=edamame.impl.read_fn.js.map
