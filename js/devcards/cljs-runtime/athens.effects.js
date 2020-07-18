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
var G__61781_61873 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61782_61874 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61781_61873,G__61782_61874) : re_frame.core.reg_fx.call(null,G__61781_61873,G__61782_61874));
var G__61783_61875 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61784_61876 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61783_61875,G__61784_61876) : re_frame.core.reg_fx.call(null,G__61783_61875,G__61784_61876));
var G__61785_61877 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61786_61878 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61785_61877,G__61786_61878) : re_frame.core.reg_fx.call(null,G__61785_61877,G__61786_61878));
var G__61787_61879 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61788_61880 = (function (p__61789){
var map__61790 = p__61789;
var map__61790__$1 = (((((!((map__61790 == null))))?(((((map__61790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61790):map__61790);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61790__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61790__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61790__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61790__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61790__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_61834){
var state_val_61835 = (state_61834[(1)]);
if((state_val_61835 === (7))){
var inst_61801 = (state_61834[(7)]);
var inst_61801__$1 = (state_61834[(2)]);
var inst_61803 = (inst_61801__$1 == null);
var inst_61804 = cljs.core.not(inst_61803);
var state_61834__$1 = (function (){var statearr_61836 = state_61834;
(statearr_61836[(7)] = inst_61801__$1);

return statearr_61836;
})();
if(inst_61804){
var statearr_61837_61881 = state_61834__$1;
(statearr_61837_61881[(1)] = (8));

} else {
var statearr_61838_61882 = state_61834__$1;
(statearr_61838_61882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (1))){
var state_61834__$1 = state_61834;
var G__61839_61883 = method;
var G__61839_61884__$1 = (((G__61839_61883 instanceof cljs.core.Keyword))?G__61839_61883.fqn:null);
switch (G__61839_61884__$1) {
case "post":
var statearr_61840_61886 = state_61834__$1;
(statearr_61840_61886[(1)] = (3));


break;
case "get":
var statearr_61841_61887 = state_61834__$1;
(statearr_61841_61887[(1)] = (4));


break;
case "put":
var statearr_61842_61888 = state_61834__$1;
(statearr_61842_61888[(1)] = (5));


break;
case "delete":
var statearr_61843_61889 = state_61834__$1;
(statearr_61843_61889[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61839_61884__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (4))){
var state_61834__$1 = state_61834;
var statearr_61844_61890 = state_61834__$1;
(statearr_61844_61890[(2)] = cljs_http.client.get);

(statearr_61844_61890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (15))){
var inst_61801 = (state_61834[(7)]);
var state_61834__$1 = state_61834;
var statearr_61845_61891 = state_61834__$1;
(statearr_61845_61891[(2)] = inst_61801);

(statearr_61845_61891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (13))){
var inst_61814 = (state_61834[(2)]);
var state_61834__$1 = state_61834;
var statearr_61846_61892 = state_61834__$1;
(statearr_61846_61892[(2)] = inst_61814);

(statearr_61846_61892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (6))){
var state_61834__$1 = state_61834;
var statearr_61847_61893 = state_61834__$1;
(statearr_61847_61893[(2)] = cljs_http.client.delete$);

(statearr_61847_61893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (17))){
var inst_61824 = (state_61834[(8)]);
var inst_61826 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61824);
var inst_61827 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61826) : re_frame.core.dispatch.call(null,inst_61826));
var state_61834__$1 = state_61834;
var statearr_61848_61894 = state_61834__$1;
(statearr_61848_61894[(2)] = inst_61827);

(statearr_61848_61894[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (3))){
var state_61834__$1 = state_61834;
var statearr_61849_61895 = state_61834__$1;
(statearr_61849_61895[(2)] = cljs_http.client.post);

(statearr_61849_61895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (12))){
var state_61834__$1 = state_61834;
var statearr_61850_61896 = state_61834__$1;
(statearr_61850_61896[(2)] = false);

(statearr_61850_61896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (2))){
var inst_61798 = (state_61834[(2)]);
var inst_61799 = (inst_61798.cljs$core$IFn$_invoke$arity$2 ? inst_61798.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61798.call(null,url,opts));
var state_61834__$1 = state_61834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61834__$1,(7),inst_61799);
} else {
if((state_val_61835 === (19))){
var inst_61832 = (state_61834[(2)]);
var state_61834__$1 = state_61834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61834__$1,inst_61832);
} else {
if((state_val_61835 === (11))){
var state_61834__$1 = state_61834;
var statearr_61851_61897 = state_61834__$1;
(statearr_61851_61897[(2)] = true);

(statearr_61851_61897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (9))){
var state_61834__$1 = state_61834;
var statearr_61852_61898 = state_61834__$1;
(statearr_61852_61898[(2)] = false);

(statearr_61852_61898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (5))){
var state_61834__$1 = state_61834;
var statearr_61853_61899 = state_61834__$1;
(statearr_61853_61899[(2)] = cljs_http.client.put);

(statearr_61853_61899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (14))){
var inst_61801 = (state_61834[(7)]);
var inst_61819 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61801);
var state_61834__$1 = state_61834;
var statearr_61854_61900 = state_61834__$1;
(statearr_61854_61900[(2)] = inst_61819);

(statearr_61854_61900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (16))){
var inst_61822 = (state_61834[(9)]);
var inst_61822__$1 = (state_61834[(2)]);
var inst_61823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61822__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61822__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61834__$1 = (function (){var statearr_61855 = state_61834;
(statearr_61855[(9)] = inst_61822__$1);

(statearr_61855[(8)] = inst_61824);

return statearr_61855;
})();
if(cljs.core.truth_(inst_61823)){
var statearr_61856_61901 = state_61834__$1;
(statearr_61856_61901[(1)] = (17));

} else {
var statearr_61857_61902 = state_61834__$1;
(statearr_61857_61902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (10))){
var inst_61817 = (state_61834[(2)]);
var state_61834__$1 = state_61834;
if(cljs.core.truth_(inst_61817)){
var statearr_61858_61903 = state_61834__$1;
(statearr_61858_61903[(1)] = (14));

} else {
var statearr_61859_61904 = state_61834__$1;
(statearr_61859_61904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (18))){
var inst_61822 = (state_61834[(9)]);
var inst_61829 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61822);
var inst_61830 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61829) : re_frame.core.dispatch.call(null,inst_61829));
var state_61834__$1 = state_61834;
var statearr_61860_61905 = state_61834__$1;
(statearr_61860_61905[(2)] = inst_61830);

(statearr_61860_61905[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (8))){
var inst_61801 = (state_61834[(7)]);
var inst_61806 = inst_61801.cljs$lang$protocol_mask$partition0$;
var inst_61807 = (inst_61806 & (64));
var inst_61808 = inst_61801.cljs$core$ISeq$;
var inst_61809 = (cljs.core.PROTOCOL_SENTINEL === inst_61808);
var inst_61810 = ((inst_61807) || (inst_61809));
var state_61834__$1 = state_61834;
if(cljs.core.truth_(inst_61810)){
var statearr_61861_61906 = state_61834__$1;
(statearr_61861_61906[(1)] = (11));

} else {
var statearr_61862_61907 = state_61834__$1;
(statearr_61862_61907[(1)] = (12));

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
var statearr_61863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61863[(0)] = athens$effects$state_machine__37203__auto__);

(statearr_61863[(1)] = (1));

return statearr_61863;
});
var athens$effects$state_machine__37203__auto____1 = (function (state_61834){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_61834);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e61864){if((e61864 instanceof Object)){
var ex__37206__auto__ = e61864;
var statearr_61865_61908 = state_61834;
(statearr_61865_61908[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61909 = state_61834;
state_61834 = G__61909;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$effects$state_machine__37203__auto__ = function(state_61834){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37203__auto____0.call(this);
case 1:
return athens$effects$state_machine__37203__auto____1.call(this,state_61834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37203__auto____0;
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37203__auto____1;
return athens$effects$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_61866 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_61866[(6)] = c__37270__auto__);

return statearr_61866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61787_61879,G__61788_61880) : re_frame.core.reg_fx.call(null,G__61787_61879,G__61788_61880));
var G__61867_61910 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61868_61911 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61869){
var map__61870 = p__61869;
var map__61870__$1 = (((((!((map__61870 == null))))?(((((map__61870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61870):map__61870);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61872 = action;
var G__61872__$1 = (((G__61872 instanceof cljs.core.Keyword))?G__61872.fqn:null);
switch (G__61872__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61872__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61867_61910,G__61868_61911) : re_frame.core.reg_fx.call(null,G__61867_61910,G__61868_61911));

//# sourceMappingURL=athens.effects.js.map
