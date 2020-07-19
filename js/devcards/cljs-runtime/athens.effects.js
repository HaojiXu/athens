goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__61778_61870 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61779_61871 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61778_61870,G__61779_61871) : re_frame.core.reg_fx.call(null,G__61778_61870,G__61779_61871));
var G__61780_61872 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61781_61873 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61780_61872,G__61781_61873) : re_frame.core.reg_fx.call(null,G__61780_61872,G__61781_61873));
var G__61782_61874 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61783_61875 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61782_61874,G__61783_61875) : re_frame.core.reg_fx.call(null,G__61782_61874,G__61783_61875));
var G__61784_61876 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61785_61877 = (function (p__61786){
var map__61787 = p__61786;
var map__61787__$1 = (((((!((map__61787 == null))))?(((((map__61787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61787):map__61787);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61787__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61787__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61787__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61787__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61787__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_61831){
var state_val_61832 = (state_61831[(1)]);
if((state_val_61832 === (7))){
var inst_61798 = (state_61831[(7)]);
var inst_61798__$1 = (state_61831[(2)]);
var inst_61800 = (inst_61798__$1 == null);
var inst_61801 = cljs.core.not(inst_61800);
var state_61831__$1 = (function (){var statearr_61833 = state_61831;
(statearr_61833[(7)] = inst_61798__$1);

return statearr_61833;
})();
if(inst_61801){
var statearr_61834_61878 = state_61831__$1;
(statearr_61834_61878[(1)] = (8));

} else {
var statearr_61835_61879 = state_61831__$1;
(statearr_61835_61879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (1))){
var state_61831__$1 = state_61831;
var G__61836_61880 = method;
var G__61836_61881__$1 = (((G__61836_61880 instanceof cljs.core.Keyword))?G__61836_61880.fqn:null);
switch (G__61836_61881__$1) {
case "post":
var statearr_61837_61883 = state_61831__$1;
(statearr_61837_61883[(1)] = (3));


break;
case "get":
var statearr_61838_61884 = state_61831__$1;
(statearr_61838_61884[(1)] = (4));


break;
case "put":
var statearr_61839_61885 = state_61831__$1;
(statearr_61839_61885[(1)] = (5));


break;
case "delete":
var statearr_61840_61886 = state_61831__$1;
(statearr_61840_61886[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61836_61881__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (4))){
var state_61831__$1 = state_61831;
var statearr_61841_61887 = state_61831__$1;
(statearr_61841_61887[(2)] = cljs_http.client.get);

(statearr_61841_61887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (15))){
var inst_61798 = (state_61831[(7)]);
var state_61831__$1 = state_61831;
var statearr_61842_61888 = state_61831__$1;
(statearr_61842_61888[(2)] = inst_61798);

(statearr_61842_61888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (13))){
var inst_61811 = (state_61831[(2)]);
var state_61831__$1 = state_61831;
var statearr_61843_61889 = state_61831__$1;
(statearr_61843_61889[(2)] = inst_61811);

(statearr_61843_61889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (6))){
var state_61831__$1 = state_61831;
var statearr_61844_61890 = state_61831__$1;
(statearr_61844_61890[(2)] = cljs_http.client.delete$);

(statearr_61844_61890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (17))){
var inst_61821 = (state_61831[(8)]);
var inst_61823 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61821);
var inst_61824 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61823) : re_frame.core.dispatch.call(null,inst_61823));
var state_61831__$1 = state_61831;
var statearr_61845_61891 = state_61831__$1;
(statearr_61845_61891[(2)] = inst_61824);

(statearr_61845_61891[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (3))){
var state_61831__$1 = state_61831;
var statearr_61846_61892 = state_61831__$1;
(statearr_61846_61892[(2)] = cljs_http.client.post);

(statearr_61846_61892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (12))){
var state_61831__$1 = state_61831;
var statearr_61847_61893 = state_61831__$1;
(statearr_61847_61893[(2)] = false);

(statearr_61847_61893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (2))){
var inst_61795 = (state_61831[(2)]);
var inst_61796 = (inst_61795.cljs$core$IFn$_invoke$arity$2 ? inst_61795.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61795.call(null,url,opts));
var state_61831__$1 = state_61831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61831__$1,(7),inst_61796);
} else {
if((state_val_61832 === (19))){
var inst_61829 = (state_61831[(2)]);
var state_61831__$1 = state_61831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61831__$1,inst_61829);
} else {
if((state_val_61832 === (11))){
var state_61831__$1 = state_61831;
var statearr_61848_61894 = state_61831__$1;
(statearr_61848_61894[(2)] = true);

(statearr_61848_61894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (9))){
var state_61831__$1 = state_61831;
var statearr_61849_61895 = state_61831__$1;
(statearr_61849_61895[(2)] = false);

(statearr_61849_61895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (5))){
var state_61831__$1 = state_61831;
var statearr_61850_61896 = state_61831__$1;
(statearr_61850_61896[(2)] = cljs_http.client.put);

(statearr_61850_61896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (14))){
var inst_61798 = (state_61831[(7)]);
var inst_61816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61798);
var state_61831__$1 = state_61831;
var statearr_61851_61897 = state_61831__$1;
(statearr_61851_61897[(2)] = inst_61816);

(statearr_61851_61897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (16))){
var inst_61819 = (state_61831[(9)]);
var inst_61819__$1 = (state_61831[(2)]);
var inst_61820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61819__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61819__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61831__$1 = (function (){var statearr_61852 = state_61831;
(statearr_61852[(8)] = inst_61821);

(statearr_61852[(9)] = inst_61819__$1);

return statearr_61852;
})();
if(cljs.core.truth_(inst_61820)){
var statearr_61853_61898 = state_61831__$1;
(statearr_61853_61898[(1)] = (17));

} else {
var statearr_61854_61899 = state_61831__$1;
(statearr_61854_61899[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (10))){
var inst_61814 = (state_61831[(2)]);
var state_61831__$1 = state_61831;
if(cljs.core.truth_(inst_61814)){
var statearr_61855_61900 = state_61831__$1;
(statearr_61855_61900[(1)] = (14));

} else {
var statearr_61856_61901 = state_61831__$1;
(statearr_61856_61901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (18))){
var inst_61819 = (state_61831[(9)]);
var inst_61826 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61819);
var inst_61827 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61826) : re_frame.core.dispatch.call(null,inst_61826));
var state_61831__$1 = state_61831;
var statearr_61857_61902 = state_61831__$1;
(statearr_61857_61902[(2)] = inst_61827);

(statearr_61857_61902[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61832 === (8))){
var inst_61798 = (state_61831[(7)]);
var inst_61803 = inst_61798.cljs$lang$protocol_mask$partition0$;
var inst_61804 = (inst_61803 & (64));
var inst_61805 = inst_61798.cljs$core$ISeq$;
var inst_61806 = (cljs.core.PROTOCOL_SENTINEL === inst_61805);
var inst_61807 = ((inst_61804) || (inst_61806));
var state_61831__$1 = state_61831;
if(cljs.core.truth_(inst_61807)){
var statearr_61858_61903 = state_61831__$1;
(statearr_61858_61903[(1)] = (11));

} else {
var statearr_61859_61904 = state_61831__$1;
(statearr_61859_61904[(1)] = (12));

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
});
return (function() {
var athens$effects$state_machine__37203__auto__ = null;
var athens$effects$state_machine__37203__auto____0 = (function (){
var statearr_61860 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61860[(0)] = athens$effects$state_machine__37203__auto__);

(statearr_61860[(1)] = (1));

return statearr_61860;
});
var athens$effects$state_machine__37203__auto____1 = (function (state_61831){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_61831);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e61861){if((e61861 instanceof Object)){
var ex__37206__auto__ = e61861;
var statearr_61862_61905 = state_61831;
(statearr_61862_61905[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61906 = state_61831;
state_61831 = G__61906;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$effects$state_machine__37203__auto__ = function(state_61831){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37203__auto____0.call(this);
case 1:
return athens$effects$state_machine__37203__auto____1.call(this,state_61831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37203__auto____0;
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37203__auto____1;
return athens$effects$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_61863 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_61863[(6)] = c__37270__auto__);

return statearr_61863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61784_61876,G__61785_61877) : re_frame.core.reg_fx.call(null,G__61784_61876,G__61785_61877));
var G__61864_61907 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61865_61908 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61866){
var map__61867 = p__61866;
var map__61867__$1 = (((((!((map__61867 == null))))?(((((map__61867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61867):map__61867);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61867__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61867__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61867__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61869 = action;
var G__61869__$1 = (((G__61869 instanceof cljs.core.Keyword))?G__61869.fqn:null);
switch (G__61869__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61869__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61864_61907,G__61865_61908) : re_frame.core.reg_fx.call(null,G__61864_61907,G__61865_61908));

//# sourceMappingURL=athens.effects.js.map
