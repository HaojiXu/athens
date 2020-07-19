goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50474,match){
var map__50475 = p__50474;
var map__50475__$1 = (((((!((map__50475 == null))))?(((((map__50475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50475):map__50475);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50477(s__50478){
return (new cljs.core.LazySeq(null,(function (){
var s__50478__$1 = s__50478;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50478__$1);
if(temp__5735__auto__){
var s__50478__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50478__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50478__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50480 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50479 = (0);
while(true){
if((i__50479 < size__4581__auto__)){
var vec__50484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50479);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(1),null);
cljs.core.chunk_append(b__50480,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50500 = (i__50479 + (1));
i__50479 = G__50500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50480),reitit$frontend$controllers$get_identity_$_iter__50477(cljs.core.chunk_rest(s__50478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50480),null);
}
} else {
var vec__50487 = cljs.core.first(s__50478__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50487,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50487,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50477(cljs.core.rest(s__50478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__50490 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50490) : f.call(null,G__50490));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__50491_50502 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50492_50503 = null;
var count__50493_50504 = (0);
var i__50494_50505 = (0);
while(true){
if((i__50494_50505 < count__50493_50504)){
var controller_50506 = chunk__50492_50503.cljs$core$IIndexed$_nth$arity$2(null,i__50494_50505);
reitit.frontend.controllers.apply_controller(controller_50506,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50507 = seq__50491_50502;
var G__50508 = chunk__50492_50503;
var G__50509 = count__50493_50504;
var G__50510 = (i__50494_50505 + (1));
seq__50491_50502 = G__50507;
chunk__50492_50503 = G__50508;
count__50493_50504 = G__50509;
i__50494_50505 = G__50510;
continue;
} else {
var temp__5735__auto___50511 = cljs.core.seq(seq__50491_50502);
if(temp__5735__auto___50511){
var seq__50491_50512__$1 = temp__5735__auto___50511;
if(cljs.core.chunked_seq_QMARK_(seq__50491_50512__$1)){
var c__4609__auto___50513 = cljs.core.chunk_first(seq__50491_50512__$1);
var G__50514 = cljs.core.chunk_rest(seq__50491_50512__$1);
var G__50515 = c__4609__auto___50513;
var G__50516 = cljs.core.count(c__4609__auto___50513);
var G__50517 = (0);
seq__50491_50502 = G__50514;
chunk__50492_50503 = G__50515;
count__50493_50504 = G__50516;
i__50494_50505 = G__50517;
continue;
} else {
var controller_50518 = cljs.core.first(seq__50491_50512__$1);
reitit.frontend.controllers.apply_controller(controller_50518,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50519 = cljs.core.next(seq__50491_50512__$1);
var G__50520 = null;
var G__50521 = (0);
var G__50522 = (0);
seq__50491_50502 = G__50519;
chunk__50492_50503 = G__50520;
count__50493_50504 = G__50521;
i__50494_50505 = G__50522;
continue;
}
} else {
}
}
break;
}

var seq__50496_50523 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50497_50524 = null;
var count__50498_50525 = (0);
var i__50499_50526 = (0);
while(true){
if((i__50499_50526 < count__50498_50525)){
var controller_50527 = chunk__50497_50524.cljs$core$IIndexed$_nth$arity$2(null,i__50499_50526);
reitit.frontend.controllers.apply_controller(controller_50527,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50528 = seq__50496_50523;
var G__50529 = chunk__50497_50524;
var G__50530 = count__50498_50525;
var G__50531 = (i__50499_50526 + (1));
seq__50496_50523 = G__50528;
chunk__50497_50524 = G__50529;
count__50498_50525 = G__50530;
i__50499_50526 = G__50531;
continue;
} else {
var temp__5735__auto___50532 = cljs.core.seq(seq__50496_50523);
if(temp__5735__auto___50532){
var seq__50496_50533__$1 = temp__5735__auto___50532;
if(cljs.core.chunked_seq_QMARK_(seq__50496_50533__$1)){
var c__4609__auto___50534 = cljs.core.chunk_first(seq__50496_50533__$1);
var G__50535 = cljs.core.chunk_rest(seq__50496_50533__$1);
var G__50536 = c__4609__auto___50534;
var G__50537 = cljs.core.count(c__4609__auto___50534);
var G__50538 = (0);
seq__50496_50523 = G__50535;
chunk__50497_50524 = G__50536;
count__50498_50525 = G__50537;
i__50499_50526 = G__50538;
continue;
} else {
var controller_50539 = cljs.core.first(seq__50496_50533__$1);
reitit.frontend.controllers.apply_controller(controller_50539,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50540 = cljs.core.next(seq__50496_50533__$1);
var G__50541 = null;
var G__50542 = (0);
var G__50543 = (0);
seq__50496_50523 = G__50540;
chunk__50497_50524 = G__50541;
count__50498_50525 = G__50542;
i__50499_50526 = G__50543;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
