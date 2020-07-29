goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__43455__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43456__auto__ = (function (){var switch__43387__auto__ = (function (state_49176){
var state_val_49177 = (state_49176[(1)]);
if((state_val_49177 === (7))){
var state_49176__$1 = state_49176;
var statearr_49178_49212 = state_49176__$1;
(statearr_49178_49212[(2)] = false);

(statearr_49178_49212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (1))){
var inst_49138 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49140 = [false];
var inst_49141 = cljs.core.PersistentHashMap.fromArrays(inst_49138,inst_49140);
var inst_49142 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49141], 0));
var state_49176__$1 = state_49176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49176__$1,(2),inst_49142);
} else {
if((state_val_49177 === (4))){
var state_49176__$1 = state_49176;
var statearr_49179_49213 = state_49176__$1;
(statearr_49179_49213[(2)] = false);

(statearr_49179_49213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (13))){
var inst_49172 = alert("Failed to retrieve data from GitHub");
var state_49176__$1 = state_49176;
var statearr_49180_49214 = state_49176__$1;
(statearr_49180_49214[(2)] = inst_49172);

(statearr_49180_49214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (6))){
var state_49176__$1 = state_49176;
var statearr_49181_49215 = state_49176__$1;
(statearr_49181_49215[(2)] = true);

(statearr_49181_49215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (3))){
var inst_49144 = (state_49176[(7)]);
var inst_49149 = inst_49144.cljs$lang$protocol_mask$partition0$;
var inst_49150 = (inst_49149 & (64));
var inst_49151 = inst_49144.cljs$core$ISeq$;
var inst_49152 = (cljs.core.PROTOCOL_SENTINEL === inst_49151);
var inst_49153 = ((inst_49150) || (inst_49152));
var state_49176__$1 = state_49176;
if(cljs.core.truth_(inst_49153)){
var statearr_49182_49216 = state_49176__$1;
(statearr_49182_49216[(1)] = (6));

} else {
var statearr_49183_49217 = state_49176__$1;
(statearr_49183_49217[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (12))){
var inst_49167 = (state_49176[(8)]);
var inst_49169 = athens.db.str_to_db_tx(inst_49167);
var inst_49170 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_49169) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_49169));
var state_49176__$1 = state_49176;
var statearr_49185_49218 = state_49176__$1;
(statearr_49185_49218[(2)] = inst_49170);

(statearr_49185_49218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (2))){
var inst_49144 = (state_49176[(7)]);
var inst_49144__$1 = (state_49176[(2)]);
var inst_49146 = (inst_49144__$1 == null);
var inst_49147 = cljs.core.not(inst_49146);
var state_49176__$1 = (function (){var statearr_49186 = state_49176;
(statearr_49186[(7)] = inst_49144__$1);

return statearr_49186;
})();
if(inst_49147){
var statearr_49187_49219 = state_49176__$1;
(statearr_49187_49219[(1)] = (3));

} else {
var statearr_49188_49220 = state_49176__$1;
(statearr_49188_49220[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (11))){
var inst_49165 = (state_49176[(2)]);
var inst_49166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49165,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49165,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49176__$1 = (function (){var statearr_49189 = state_49176;
(statearr_49189[(8)] = inst_49167);

return statearr_49189;
})();
if(cljs.core.truth_(inst_49166)){
var statearr_49190_49221 = state_49176__$1;
(statearr_49190_49221[(1)] = (12));

} else {
var statearr_49191_49222 = state_49176__$1;
(statearr_49191_49222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (9))){
var inst_49144 = (state_49176[(7)]);
var inst_49162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49144);
var state_49176__$1 = state_49176;
var statearr_49192_49223 = state_49176__$1;
(statearr_49192_49223[(2)] = inst_49162);

(statearr_49192_49223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (5))){
var inst_49160 = (state_49176[(2)]);
var state_49176__$1 = state_49176;
if(cljs.core.truth_(inst_49160)){
var statearr_49193_49224 = state_49176__$1;
(statearr_49193_49224[(1)] = (9));

} else {
var statearr_49194_49225 = state_49176__$1;
(statearr_49194_49225[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (14))){
var inst_49174 = (state_49176[(2)]);
var state_49176__$1 = state_49176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49176__$1,inst_49174);
} else {
if((state_val_49177 === (10))){
var inst_49144 = (state_49176[(7)]);
var state_49176__$1 = state_49176;
var statearr_49195_49226 = state_49176__$1;
(statearr_49195_49226[(2)] = inst_49144);

(statearr_49195_49226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49177 === (8))){
var inst_49157 = (state_49176[(2)]);
var state_49176__$1 = state_49176;
var statearr_49196_49227 = state_49176__$1;
(statearr_49196_49227[(2)] = inst_49157);

(statearr_49196_49227[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto____0 = (function (){
var statearr_49197 = [null,null,null,null,null,null,null,null,null];
(statearr_49197[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto__);

(statearr_49197[(1)] = (1));

return statearr_49197;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto____1 = (function (state_49176){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_49176);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e49198){if((e49198 instanceof Object)){
var ex__43391__auto__ = e49198;
var statearr_49199_49228 = state_49176;
(statearr_49199_49228[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49230 = state_49176;
state_49176 = G__49230;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto__ = function(state_49176){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto____1.call(this,state_49176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__43388__auto__;
})()
})();
var state__43457__auto__ = (function (){var statearr_49203 = (f__43456__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43456__auto__.cljs$core$IFn$_invoke$arity$0() : f__43456__auto__.call(null));
(statearr_49203[(6)] = c__43455__auto__);

return statearr_49203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43457__auto__);
}));

return c__43455__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
})], null),"Reset DB"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49205 = (function (meta49206){
this.meta49206 = meta49206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49207,meta49206__$1){
var self__ = this;
var _49207__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49205(meta49206__$1));
}));

(athens.devcards.db.t_athens$devcards$db49205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49207){
var self__ = this;
var _49207__$1 = this;
return self__.meta49206;
}));

(athens.devcards.db.t_athens$devcards$db49205.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49205.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48668__auto__,devcard_opts__48669__auto__){
var self__ = this;
var this__48668__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48669__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48687__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__48687__auto__)){
return (function (data_atom__48688__auto__,owner__48689__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48687__auto__,data_atom__48688__auto__,owner__48689__auto__], null));
});
} else {
return reagent.core.as_element(v__48687__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48669__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49206","meta49206",-399439743,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49205.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49205.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49205");

(athens.devcards.db.t_athens$devcards$db49205.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49205");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49205.
 */
athens.devcards.db.__GT_t_athens$devcards$db49205 = (function athens$devcards$db$__GT_t_athens$devcards$db49205(meta49206){
return (new athens.devcards.db.t_athens$devcards$db49205(meta49206));
});

}

return (new athens.devcards.db.t_athens$devcards$db49205(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49208 = (function (meta49209){
this.meta49209 = meta49209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49210,meta49209__$1){
var self__ = this;
var _49210__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49208(meta49209__$1));
}));

(athens.devcards.db.t_athens$devcards$db49208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49210){
var self__ = this;
var _49210__$1 = this;
return self__.meta49209;
}));

(athens.devcards.db.t_athens$devcards$db49208.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49208.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48668__auto__,devcard_opts__48669__auto__){
var self__ = this;
var this__48668__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48669__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48687__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__48687__auto__)){
return (function (data_atom__48688__auto__,owner__48689__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48687__auto__,data_atom__48688__auto__,owner__48689__auto__], null));
});
} else {
return reagent.core.as_element(v__48687__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48669__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49209","meta49209",-734964070,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49208.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49208.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49208");

(athens.devcards.db.t_athens$devcards$db49208.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49208");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49208.
 */
athens.devcards.db.__GT_t_athens$devcards$db49208 = (function athens$devcards$db$__GT_t_athens$devcards$db49208(meta49209){
return (new athens.devcards.db.t_athens$devcards$db49208(meta49209));
});

}

return (new athens.devcards.db.t_athens$devcards$db49208(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
